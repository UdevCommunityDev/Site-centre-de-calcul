@extends('outputs._postPageOutPut')

@section('title')
    Categories
@stop

@section('body')
    <section class="section portion show-category-section">
        <div class="row">
            <div class="container">
                @foreach($categories as $category)
                    <div class="row item">
                        <div class="c-xs-12">
                            <a href="{{action('CategoriesController@show' ,[$category->slug])}}"><h1 class="category-name">{{$category->name}} ({{count($category->getPost())}})</h1></a>
                            <p class="category-description">{{$category->description}}</p>
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