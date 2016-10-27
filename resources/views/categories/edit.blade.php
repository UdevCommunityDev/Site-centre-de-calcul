@extends('outputs._fullPageOutPut')

@section('title')
    Modifier une catègorie
@stop

@section('content')
    <section class="section create-category">
        <div class="container">
            <div class="row">
                <div class="c-xs-12 c-s-5 c-s-center">
                    {!! Form::model($category ,['method' =>"PATCH" , 'action' =>['CategoriesController@update',$category->slug] , 'class' => 'form']) !!}
                    @include('partial._categoriesForm',['submitText' => 'Modifier'])
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </section>
@stop

