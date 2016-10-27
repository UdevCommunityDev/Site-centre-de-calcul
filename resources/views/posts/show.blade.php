@extends('outputs._postPageOutPut')

@section('title')
    {{$post->title}}
@stop

@section('body')
        <section class="section portion show-post-section">
            <div class="container">
                <div class="row">
                    <div class="post-head">
                        <div class="post-other">
                            @include('partial._precNextPost')
                        </div>
                        <h1 class="post-title">{{$post->title}}</h1>
                        <h5 class="post-author">
                            PAR <a href="{{route('user.profile',[$post->user->id])}}">{{strtoupper($post->user->name)}}</a>
                        </h5>
                        <div class="post-category">
                            <a href="{{action('CategoriesController@show',[$post->category->slug])}}"> {{$post->category->name}}</a>
                        </div>
                        <div class="post-date">
                            <i class="icon icon-calendar"></i><a href="{{action('CategoriesController@show',[$post->category->slug])}}">{{$post->publishedAt()}}</a>
                        </div>
                        <div class="post-thumbnail">
                            <img src="{{asset($post->photo->path)}}">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="post-body">
                        {!!$post->content !!}
                    </div>
                </div>
                <div class="row">
                    <div class="post-footer">
                        <div class="post-tags">
                            @foreach($post->tags as $tag )
                                <a href="{{action('TagsController@show',[$tag->slug])}}" class="tag">{{$tag->name}}</a>
                            @endforeach
                        </div>
                        <div class="post-other">
                            @include('partial._precNextPost')
                        </div>
                    </div>
                </div>
            </div>
        </section>
@stop

@section('right-side')
    @include('partial.shouldReceiveData._postRightSide')
@stop
