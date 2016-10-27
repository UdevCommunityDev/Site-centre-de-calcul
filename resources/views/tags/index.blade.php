@extends('outputs._postPageOutPut')

@section('title')
    #Hashtags
@stop

@section('body')
    <section class="section portion show-category-section">
        <div class="row">
            <div class="container">
                @foreach($tags as $tag)
                    <div class="row item">
                        <div class="c-xs-12">
                            <a href="{{action('TagsController@show' ,[$tag->slug])}}"><h1 class="category-name">#{{$tag->name}} ({{count($tag->getPost())}})</h1></a>
                            <p class="category-description">{{$tag->description}}</p>
                        </div>
                    </div>
                @endforeach


                <div class="row">
                    {{--{{$tags->getPost()->links()}}--}}
                </div>
            </div>
        </div>
    </section>
@stop
@section('right-side')
    @include('partial.shouldReceiveData._tagRightSide')
@stop