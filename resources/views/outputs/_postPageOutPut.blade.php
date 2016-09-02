@extends('layouts.default')

@section('title')

    @yield('title')

@stop

@section('content')

    @include('partial.shouldReceiveData._recentPost')



    <div class="c-xs-12 c-s-9 site-content-body">
        @yield('body')
    </div>


    <aside class="c-xs-12 c-s-3 site-content-right-side">
       @yield('right-side')
    </aside>

    <div class="c-xs-12 c-s-12 site-content-footer">
      @include('partial.shouldReceiveData._popularPost')
    </div>

@stop

@section('scripts')
@stop