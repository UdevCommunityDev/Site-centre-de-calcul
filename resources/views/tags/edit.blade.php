@extends('outputs._fullPageOutPut')

@section('title')
    Modifier une catègorie
@stop

@section('content')
    <section class="section create-category">
        <div class="container">
            <div class="row">
                <div class="c-xs-12 c-s-5 c-s-center">
                    {!! Form::model($tag ,['method' =>"PATCH" , 'action' =>['TagsController@update',$tag->slug] , 'class' => 'form']) !!}
                    @include('partial._tagsForm',['submitText' => 'Modifier'])
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </section>
@stop