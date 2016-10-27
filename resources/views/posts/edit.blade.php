@extends('layouts.default')

@section('title')
    Ajouter un article
@stop


@section('content')
    <section class="section create-post">
        <div class="container">
            <div class="portion">
                <div class="row ">
                    <div class="c-xs-12">
                        {!! Form::model($posts,['method' => 'PATCH' ,'action' =>['PostsController@update',$posts->slug] , 'class' => 'form','files' => true]) !!}
                        <div class="row">
                            @include('errors._field_error_list')
                        </div>
                        @include('partial._postForm',['submitText' => 'Modifier'])
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
