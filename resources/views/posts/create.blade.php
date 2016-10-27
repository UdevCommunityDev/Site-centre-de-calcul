@extends('layouts.default')

@section('title')
    Ajouter un article
@stop


@section('content')
   <section class="section create-post">
      <div class="container">
         <div class="portion">
             <div class="row">
                 <div class="c-xs-12">
                     {!! Form::model($posts = new App\Post(),['action' =>'PostsController@store' , 'class' => 'form','files' => true]) !!}
                     <div class="row">
                         @include('errors._field_error_list')
                     </div>
                     @include('partial._postForm',['submitText' => 'Publier'])
                     {!! Form::close() !!}
                 </div>
             </div>
         </div>
      </div>
   </section>
@stop
