@extends('outputs._fullPageOutPut')

@section('title')
    Uci | Blog
@stop

@section('body')
    <section id="news" class="section blog-section">
        <div class="row">
            <div class="c-xs-10 c-s-center">
                <div class="container">
                   @if($posts->isEmpty())
                       <div class="row alert-container">
                           <div class="uci-alert info">
                               <strong>
                                   For now there is no post available. Sorry!
                               </strong>
                           </div>
                       </div>
                    @else
                        @foreach($posts->chunk(3) as $items )
                            <div class="row">
                                @foreach($items as $post)
                                    <div class="c-xs-12 c-s-6 c-m-4 posts">
                                        <div class="portion">
                                            <div class="item">
                                                <div class="row">
                                                    <h2>{{link_to_action('PostsController@show',$post->title,[$post->category->slug,$post->slug],['class' => 'title'])}}</h2>
                                                    <span class="author">{{$post->user->name}}</span>
                                                    <span class="date">{{$post->publishedAt()}}</span>
                                                    <p class="excerpt">{{$post->excerpt}}</p>
                                                    @foreach($post->tags as $tag )
                                                        {{link_to_action('TagsController@show','#'.$tag->name,[$tag->slug],['class' => 'hashtag'])}}
                                                    @endforeach
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="c-xs-12 pic">
                                                        <a href="{{action('PostsController@show',[$post->category->slug,$post->slug])}}">
                                                            <img src="{{asset($post->photo->tn_path)}}" alt="{{$post->name}}">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @endforeach
                        <hr>
                        {{$posts->links()}}
                   @endif
                </div>
            </div>
        </div>
    </section><!--  Blog Section -->
@stop