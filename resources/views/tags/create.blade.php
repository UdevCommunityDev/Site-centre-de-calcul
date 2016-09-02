@extends('outputs._fullPageOutPut')

@section('title')
    Ajouter hashtag
@stop

@section('content')
    <section class="section create-category">
        <div class="container">
            <div class="row">
               <div class="c-xs-12 c-s-5 c-s-center">
                 {!! Form::open(['action' =>'TagsController@store' , 'class' => 'form']) !!}
                     @include('partial._tagsForm',['submitText' => 'Ajouter'])
                 {!! Form::close() !!}
               </div>
            </div>
        </div>
    </section>
@stop