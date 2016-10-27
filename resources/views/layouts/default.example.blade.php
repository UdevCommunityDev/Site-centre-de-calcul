<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Unité De Calcul Intensif</title>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="{{asset("css/all.css")}}">
    
    <link rel="icon" href="{{asset("img/favicon.png")}}">

    <!-- Internet Explorer Conditional Comments -->
    <!--[if lt IE 9]>
    <script src=""></script>
    <![endif]-->
</head>


<body>

<div class="site-container">

    <div class="site-posher">

            @include('partial._header') {{-- Header --}}

        <div class="site-content">

            @yield('content') {{-- Content --}}

            @include('partial._footer') {{-- Footer --}}

            <div class="site-cache" id="site-cache"></div>

        </div>{{-- Site Content --}}

 </div>

</div>
<!-- JAVASCRIPT -->

    @include('partial._default_scripts')  {{-- Default scripts --}}

    @yield('scripts') {{-- Costum Scripts --}}



</body>
</html>



