@extends('layouts.default')


@section('content')
    <section id="news" class="section news-section">
        <div class="container">
            <div class="section-title">
                <h1>Actualités</h1>
            </div>
            <div class="section-content">
                <div class="c-xs-hide c-s-5 pic">
                    <img src="img/news-pic.png" alt="">
                </div>
                <div class="c-xs-12 c-s-6 text">
                    <div class="c-xs-12 item">
                        <div class="c-xs-2  c-xs-hide">
                            <i class="icon icon-news-icon"></i>
                        </div>
                        <div class="c-xs-12 c-s-10 new">
                            <h3>Actualité</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. <a href="#" class="tag">lire tout</a>
                            </p>
                        </div>
                    </div>
                    <div class="c-xs-12 item">
                        <div class="c-xs-2 c-xs-hide">
                            <i class="icon icon-news-icon"></i>
                        </div>
                        <div class="c-xs-12 c-s-10 new  ">
                            <h3>Actualité</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. Proin gravida dolor
                                sit amet lacus accumsan et viverra justo <a href="#" class="tag">lire tout</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section><!--  News Section -->
@stop