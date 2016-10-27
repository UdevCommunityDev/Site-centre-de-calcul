@extends('outputs._fullPageOutPut')

@section('body')
    <section class="portion section section-404">
        <div class="row">
            <div class="container">
                <h1 class="baseline-1">404</h1>
                <h2 class="baseline-2">OOPS, SORRY WE CAN'T FIND THAT PAGE!</h2>
                <p class="description-text">
                    Either something went wrong or the page doesn't exist anymore.
                </p>
                <a  href="{{url('/home')}}" class="homepage-link">Home page</a>
            </div>
        </div>
    </section>
@stop