<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartProducts;
use App\Models\Promocode;
use App\Models\Address;
use App\Models\Products;
use App\Models\Payment;

use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect as RedirectInertia;

use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
	//---
    public function index(Request $request)
	{
		$data = self::jsonData($request);
		
		return response([
			'message' => "Data Get",
			"count"=> $data['count'] ?? 0,
			"price"=> $data['price'] ?? 0,
		], 200);
	}
	
	static function jsonData($request)
	{
		//collection
		$uuid = $request->uuid;
		$data = Cart::with('cartProduct')
		->where('status', 'cart')
		->where(function ($query) use ($uuid) {
			$query->where('guest_uuid', $uuid);
			if(Auth::check()==true){
				$query->orWhere('users_id', auth()->user()->id);
			}
		})
		->first();
		$count = 0;
		$price = 0;
		
		if(@$data){
			foreach($data->cartProduct as $cart){
				$product = $cart->product;
				if($product->qty < $cart->quantity || $product->status=='0'){
					$cart->delete();
				}
			}

			foreach($data->cartProduct as $cart){
				$count = $count + $cart->quantity;
				$price = ($cart->quantity * $cart->product->price) + $price;
				$cart->product = $cart->product;
			}
		}
		
		return array('data'=>$data, 'count'=>$count, 'price'=>$price);
	}
	
	//---
    public function data(Request $request)
	{
		$data = self::jsonData($request);
		
		$auth = '';
		$card = '';
		if(Auth::check()==true){
			$auth = Auth::user();
			$card = Address::where('users_id', $auth->id)->first();
		}
		return response([
			'message' => "Data Get",
			"count"=> $data['count'] ?? 0,
			"price"=> $data['price'] ?? 0,
			"data"=> $data['data'],
			"months"=> months(),
			"years"=> years(),
			"auth"=> $auth,
			"card"=> $card,
		], 200);
	}
	
	//---
    public function store(Request $request)
	{
		$uuid = $request->uuid;

		$cartId = Cart::where('status', 'cart')
		->where(function ($query) use ($uuid) {
			$query->where('guest_uuid', $uuid);
			if(Auth::check()==true){
			$query->orWhere('users_id', auth()->user()->id);
			}
		})->with('CartProduct')->whereHas('cartProduct',function($q) use ($request){
			$q->where('store_id','!=',$request->store_id);
		})->delete();
		
		
		$check = Cart::where('status', 'cart')
		->where(function ($query) use ($uuid) {
			$query->where('guest_uuid', $uuid);
			if(Auth::check()==true){
			$query->orWhere('users_id', auth()->user()->id);
			}
		})
		->first();
		
		
		
		//---store
		$cart = new Cart;
		
		if(Auth::check()==true){
			$cart->users_id = auth()->user()->id;
		}
		$cart->guest_uuid = $request->uuid;
		
		if(@$check){
			$cart->id = $check->id;
			$cart->exists = true;
		}
		
		$cart->save();
		
		//---
		$exist = CartProducts::where('products_id', $request->product)
		->where('carts_id', $cart->id)->first();
		$checkproduct = Products::find($request->product);
		
		$product = new CartProducts;
		if(@$exist){
			$product->id = $exist->id;
			$product->exists = true;
			if($exist->quantity < $checkproduct->qty){
				$product->quantity = $exist->quantity + 1;
			}
			else {
				$product->quantity = $checkproduct->qty;
			}
		}
		else {
			$product->carts_id = $cart->id;
			$product->products_id = $request->product;
			$product->quantity = '1';
		}		
		$product->store_id = $request->store_id;
		$product->save();
		
		//---
		$data = self::jsonData($request);
		
		return response([
			'message' => "Product Added to Cart",
			"count"=> $data['count'] ?? 0,
			"price"=> $data['price'] ?? 0
		], 200);	
	}
	
	
	//---
    public function reorder(Request $request)
	{
		$uuid = $request->uuid;
		$cartProduct = CartProducts::where('carts_id', $request->cart)->get();		
		
		$check = Cart::where('status', 'cart')
		->where(function ($query) use ($uuid) {
			$query->where('guest_uuid', $uuid);
			if(Auth::check()==true){
			$query->orWhere('users_id', auth()->user()->id);
			}
		})
		->delete();
		//->first();
		
		//---store
		$cart = new Cart;
		
		$cart->users_id = auth()->user()->id;
		$cart->guest_uuid = $request->uuid;
		
		// if(@$check){
			// $cart->id = $check->id;
			// $cart->exists = true;
		// }
		
		$cart->save();
		
		//---
		foreach($cartProduct as $product){
			$exist = CartProducts::where('products_id', $product->products_id)
			->where('carts_id', $cart->id)->first();
			
			$prod = new CartProducts;
			if(@$exist){
				$prod->id = $exist->id;
				$prod->exists = true;
				$prod->quantity = $exist->quantity + 1;
			}
			else {
				$prod->carts_id = $cart->id;
				$prod->products_id = $product->products_id;
				$prod->quantity = $product->quantity;
			}		
			$prod->save();
		}
		
		//---
		// $data = self::jsonData($request);
		
		// return response([
			// 'message' => "Product Added to Cart",
			// "count"=> $data['count'] ?? 0,
			// "price"=> $data['price'] ?? 0
		// ], 200);
		return RedirectInertia::back()->with('success', 'Product Added to Cart');
	}
	
	
	
	
	//---
    public function action(Request $request)
	{		
		$check = CartProducts::where('carts_id', $request->cart)
		->where('id', $request->product)
		->first();
		
		$product = Products::find($check->products_id);
		
		switch($request->type){
			case 'plus':
				if($check->quantity<$product->qty){
					$check->quantity = $check->quantity + 1;
				}
				else {
					$check->quantity = $product->qty;
				}
				$check->save();
				break;
			case 'minus':
				if($check->quantity>1){
					$check->quantity = $check->quantity - 1;
					$check->save();
				}
			break;
			case 'delete':
				$check->delete();
			break;
		}
		
		
		$data = self::jsonData($request);
		
		$auth = '';
		if(Auth::check()==true){
			$auth = Auth::user();
		}
		return response([
			'message' => "Data Get",
			"count"=> $data['count'] ?? 0,
			"price"=> $data['price'] ?? 0,
			"data"=> $data['data'],
			"auth"=> $auth,
		], 200);
	}
		
	//---
    public function promocode(Request $request)
	{
		$date = date('Y-m-d');
		$code = Promocode::where('promocode', $request->promo_code)
		->where('start_date', '<=', $date)
		->where('expire_date', '>=', $date)
		->where('status', '1')
		->where('is_delete', '0')
		->first();
		
		if(@$code){
			$checkPromo = Cart::where('users_id', auth()->user()->id)
				->where('promocode', $code->promocode)
				->where('status', 'paid')
				->count();
				
			$payment = Payment::where('users_id', auth()->user()->id)
				->count();
			
			if($code->new_users=='yes' && $payment > 0){
				return response(['type' => "error", 'message' => "Invalid Promo Code"], 200);
			}
			
			if(@$checkPromo >= $code->uses_limit){
				return response(['type' => "error", 'message' => "Invalid Promo Code"], 200);
			}
			
			if(@$code->users && !in_array(auth()->user()->id, json_decode($code->users))){
				return response(['type' => "error", 'message' => "Invalid Promo Code"], 200);
			}
			
			
			
			
			// $checkPromoUses = Cart::where('promocode', $code->promocode)
				// ->where('status', 'paid')
				// ->count();
			// if(@$checkPromoUses>$code->uses_limit){
				// return response(['type' => "error", 'message' => "Invalid Promo Code"], 200);
			// }
			
			
			return response(['type' => "success", 'message' => "Promo Code Applied", 'code' => $code], 200);
		}
		return response(['type' => "error", 'message' => "Invalid Promo Code"], 200);
	}
	
	
	
}
