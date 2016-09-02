@extends('outputs._fullPageOutPut')

@section('title')
    Uci | À Propos
@stop

@section('body')
    <section id="about" class="section about-section">
        <div class="container">
            <div class="section-title">
                <h1>A propos de l’UCI</h1>
            </div>
            <div class="content">
                <div class="c-xs-12 c-s-4 item">
                    <i class="icon icon-cluster-icon"></i>
                    <h2><a href="">Cluster</a></h2>
                    <h3>Présentation du cluster.</h3>
                </div>
                <div class="c-xs-12 c-s-4 item">
                    <i class="icon icon-use-d-icon"></i>
                    <h2><a href="">Domaines d’utilisation</a></h2>
                    <h3>
                        Différents domaines d'application
                        d'un SuperOrdinateur.
                    </h3>
                </div>
                <div class="c-xs-12 c-s-4 item">
                    <i class="icon icon-hpc-icon"></i>
                    <h2><a href="">HPC</a></h2>
                    <h3>
                        Définition de
                        High Performance Computing.
                    </h3>
                </div>
            </div>
        </div>

    </section><!--  About Section -->
@stop