var elixir = require('laravel-elixir');
var gulp = require('gulp') ;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass([
        "style.scss"
        ],'resources/assets/css')
        .styles([   
            'normalize.css',
            'select.css',
            'app.css'
         ])
        .scripts([
            'jq.js',
            'alert.js',
            'carousel.js',
            'caroudsel.js',
            'fileUploader.js',
            'createPostJs.js',
            'form.js',
            'live_slug.js',
            'nav_items.js',
            'script.js',
            'select.js',
            'swa.js',
            'sweetalert.js',
            'tabs.js',
            'tinycme.js'
        ]).version([
            'css/all.css',
            'js/all.js',
        ])



    
    ; 
});

