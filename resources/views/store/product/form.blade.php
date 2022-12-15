<!-- <div class="form-group {!! ($errors->has('store') ? 'has-error' : '') !!}">
    {!! Form::label('store','Select Store', ['class' => 'control-label']) !!}
    {!! Form::select('store', $stores, null, ['class' => 'form-control' . ($errors->has('store') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('store', '<span class="help-block">:message</span>') !!}
</div> -->


<div class="form-group {!! ($errors->has('category') ? 'has-error' : '') !!}">
    {!! Form::label('category','Select Category', ['class' => 'control-label']) !!}
    {!! Form::select('category', $category, null, ['class' => 'form-control' . ($errors->has('category') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('category', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('title') ? 'has-error' : '') !!}">
    {!! Form::label('title','Title', ['class' => 'control-label']) !!}
    {!! Form::text('title', null, ['class' => 'form-control' . ($errors->has('title') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('title', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('description') ? 'has-error' : '') !!}">
    {!! Form::label('description','Description', ['class' => 'control-label']) !!}
    {!! Form::text('description', null, ['class' => 'form-control' . ($errors->has('description') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('description', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('qty') ? 'has-error' : '') !!}">
    {!! Form::label('qty','Qty', ['class' => 'control-label']) !!}
    {!! Form::number('qty', null, ['class' => 'form-control' . ($errors->has('qty') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('qty', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('sku') ? 'has-error' : '') !!}">
    {!! Form::label('sku','SKU', ['class' => 'control-label']) !!}
    {!! Form::text('sku', null, ['class' => 'form-control' . ($errors->has('sku') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('sku', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('price') ? 'has-error' : '') !!}">
    {!! Form::label('price','Price', ['class' => 'control-label']) !!}
    {!! Form::text('price', null, ['class' => 'form-control' . ($errors->has('price') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('price', '<span class="help-block">:message</span>') !!}
</div>
<div class="form-group {!! ($errors->has('tag') ? 'has-error' : '') !!}">
    {!! Form::label('nutrition_info','Nutritional Information', ['class' => 'control-label']) !!}
    {!! Form::textarea('nutrition_info', null, ['class' => 'form-control' . ($errors->has('nutrition_info') ? ' is-invalid' : '')]) !!}
    {!! $errors->first('nutrition_info', '<span class="help-block">:message</span>') !!}
</div>
<div class="form-group {!! ($errors->has('image') ? 'has-error' : '') !!}">
    {!! Form::label('image','Image', ['class' => 'control-label']) !!}</br>
    {!! Form::file('image', null, ['class' => '' . ($errors->has('name') ? ' is-invalid' : '') ]) !!}
    {!! $errors->first('image', '</br><span class="help-block">:message</span>') !!}
	@if(@$product && $product->image)
		</br>
		<img width="200" src="{{ asset('storage/products/'.$product->image) }}">
	@endif
</div>

<div class="form-group {!! ($errors->has('tag') ? 'has-error' : '') !!}">
    {!! Form::label('tag','Tag', ['class' => 'control-label']) !!}
    {!! Form::text('tag', null, ['class' => 'form-control' . ($errors->has('tag') ? ' is-invalid' : '')]) !!}
    {!! $errors->first('tag', '<span class="help-block">:message</span>') !!}
</div>

<div class="form-group {!! ($errors->has('status') ? 'has-error' : '') !!}">
    {!! Form::label('status','Status', ['class' => 'control-label']) !!}</br>
    {!! Form::radio('status', 0) !!} De-active
    {!! Form::radio('status', 1) !!} Active
	</br>
    {!! $errors->first('status', '<span class="help-block">:message</span>') !!}
</div>


@section('script')
<script src="https://cdn.ckeditor.com/4.15.1/standard/ckeditor.js"></script>
<script>

$( document ).ready(function() {
		var editor =  CKEDITOR.replace( 'nutrition_info' );
	});

	$(function () {
		
		$("input[name=price]").keydown(function (event) {

			if (event.shiftKey == true) {
				event.preventDefault();
			}

			if ((event.keyCode >= 48 && event.keyCode <= 57) || 
				(event.keyCode >= 96 && event.keyCode <= 105) || 
				event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
				event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

			} else {
				event.preventDefault();
			}

			if($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
				event.preventDefault(); 
			//if a decimal has been added, disable the "."-button

		});
	});
</script>
@endsection