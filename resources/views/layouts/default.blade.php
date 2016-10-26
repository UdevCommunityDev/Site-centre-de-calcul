<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title')</title>
    <meta name="encoding" content="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset("css/all.css")}}">
    <link rel="icon" href="{{asset("img/favicon.png")}}">

    <!-- Internet Explorer Conditional Comments -->
    <!-- [if lt IE 9] -->
    <script src=""></script>
    <!-- [endif] -->
</head>
<body>

    @include('partial._header') {{-- Header --}}

<div class="site-content">

   <div class="row">
       
       @include('partial._flash') {{-- flash --}}

       @yield('content'){{-- Site Content  --}}

   </div>


    @include('partial._footer')  {{--Footer --}}

</div>
<div class="site-cache" id="site-cache"></div>

    @include('partial._default_scripts')   {{-- Default scripts --}}

</body>
</html>