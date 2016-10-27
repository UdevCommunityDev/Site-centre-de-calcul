@extends('outputs._postPageOutPut')

@section('title')
    #{{$tag->name}}
@stop

@section('body')
    <section class="section portion show-category-section">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="c-xs-12">
                        <h1 class="category-name">#{{$tag->name}}</h1>
                        <p class="category-description">{{$tag->description}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="c-xs-12">

                        @if($tag->getPost()->isEmpty())
                            @if($signedIn && $user->hasRole('Editor') )
                                <div class="row item">
                                    <div class="c-xs-12">
                                        <p>For now there is no post available in <strong>{{$tag->name}}</strong>. {{link_to_route('posts.create','Add')}}</p>
                                    </div>
                                </div>
                            @else
                                <div class="row item">
                                    <div class="c-xs-12">
                                        <p>For now there is no post available in <strong>{{$tag->name}}</strong>. Sorry!</p>
                                    </div>
                                </div>
                            @endif
                        @else
                            @foreach($tag->getPost() as $post)
                                <div class="row item">
                                    <div class="c-xs-12">
                                        <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}" class="c-xs-3 item-pic">
                                            <img src="{{asset($post->photo->tn_path)}}" alt="{{$post->title}}">
                                        </a>
                                        <div class="c-xs-9 item-content">
                                            <h3 class="item-title">{{link_to_route('posts.show',$post->title,[$post->category->slug,$post->slug],['class' =>'title'])}}</h3>
                                            <p class="item->excerpt">{{$post->excerpt}}... <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}" class="learn-more">lire la suit</a></p>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                            @endforeach
                        @endif

                    </div>
                </div>
                <div class="row">
                    {{$tag->getPost()->links()}}
                </div>
            </div>
        </div>
    </section>
@stop
@section('right-side')
    @include('partial.shouldReceiveData._tagRightSide')
@stop