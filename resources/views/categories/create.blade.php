@extends('outputs._fullPageOutPut')

@section('title')
    Ajouter une catègorie
@stop

@section('content')
    <section class="section create-category">
        <div class="container">
            <div class="row">
               <div class="c-xs-12 c-s-5 c-s-center">
                   {!! Form::model($category = new \App\Category() ,['action' =>'CategoriesController@store' , 'class' => 'form']) !!}
                   @include('partial._categoriesForm',['submitText' => 'Ajouter'])
                   {!! Form::close() !!}
               </div>
            </div>
        </div>
    </section>
@stop