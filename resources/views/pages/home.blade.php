@extends('outputs._fullPageOutPut')

@section('title')
    Uci | Acceuil
@stop

@section('body')

    <main class="main">
        <div class="container">
            <div class="c-xs-12 c-m-10">
                <h1 class="header--title">Bienvenue à l’Unité de Calcul Intensif</h1>
                <div class="header--description">
                    <p>
                        La Direction Générale de la Recherche Scientifique et du Développement Technologique
                        du ministère de l’Enseignement Supérieure et la Recherche Scientifique (DGRSDT),
                        vient de mettre à la disposition des chercheurs de l'Université des Science et de Technologie d'Oran (USTO),
                        un cluster leur permettant d’effectuer du calcul intttensif ou du HPC "High Performance Computing".

                    </p>
                </div>
            </div>
            <div class="c-xs-hide c-s-hide c-m-2 usto-logo">
                <a href="http://www.univ-usto.dz/" target="_blank">
                    <img src="{{asset("img/usto.png")}}" alt="Usto Logo">
                </a>
            </div>
        </div>
    </main><!-- Main Section -->

    <section id="home" class="section intro-section">
        <div class="container">
            <div class="c-xs-12 tabs">
               <div class="wrapper">
                   <a href="#item1" class="item is-active">Cluster</a>
                   <a href="#item2" class="item">Domaines d’utilisation</a>
                   <a href="#item3" class="item">HPC</a>
               </div>
            </div>
            <div class="c-xs-12 content">
                <div class="item is-active" id="item1"><br><br>
                    <i class="icon icon-cluster-icon"></i><br>
                    <h2 class="title">Présentation du cluster.</h2>
                    <div class="description">
                        <p>
                            L'ordinateur permettant de faire un calcul intensif est dit supercalculateur.
                            Un supercalculateur (ou superordinateur) est un ordinateur conçu pour atteindre les plus hautes performances possibles avec les technologies connues lors de sa conception,
                            en particulier en termes de vitesse de calcul.La science des superordinateurs est appelée « calcul à haute performance » L'unité de mesure de performance des calculateurs est le FLOPS (floating point Operations Per Second) en double précision ou en simple précision.
                            On parle de cluster pour désigner des technique consistant à regrouper plusieurs processeur indépendants appelés noeuds(node en anglais),
                            afin de permettre une gestion globale et de dépasser les limitations d'un ordinateur pour:
                        </p>
                        <ul class="features">
                            <li>Augmenter la disponibilité.</li>
                            <li>faciliter la montée en charge.</li>
                            <li>permettre une répartition de la charge.</li>
                            <li>faciliter la gestion des ressources (processeur, mémoir vive, disques dur, bande passante réseau).</li>
                        </ul>
                    </div>
                </div>
                <div class="item" id="item2"><br><br>
                    <i class="icon icon-use-d-icon"></i><br>
                    <h2 class="title">Différents domaines d'application d'un SuperOrdinateur.</h2>
                    <div class="description">
                        <p>
                            Les superordinateurs sont de plus en plus important dans la communauté scientifique, où les besoins en calculs à haute performance (HPC) sont toujours croissants,utilisés pour toutes les tâches qui nécessitent une très forte puissance de calcul comme les prévisions météorologiques, l’étude du climat, la modélisation moléculaire (calcul des structures et propriétés de composés chimiques…), les simulations physiques (simulations aérodynamiques, calculs de résistance des matériaux, simulation d’explosion d’arme nucléaire, étude de la fusion nucléaire…), la cryptanalyse, les simulations en finance et assurance (Calcul stochastique), ainsi qu'en imagerie numérique notamment pour les images de synthèse au travers des fermes de rendu. En Informatique de gestion.
                        </p>
                        <ul>
                            <li>Science(Climatologie,L'astrophysique)</li>
                            <li>Ingénierie(Simulation de crash,Tremblement de terre)</li>
                            <li>Economie(Marché financier)</li>
                            <li>Défense(Cryptographie,Nucléaire)</li>
                        </ul>
                    </div>
                </div>
                <div class="item" id="item3"><br><br>
                    <i class="icon icon-hpc-icon"></i>
                    <h2 class="title"> Définition de High Performance Computing.</h2>
                    <div class="description">
                        <p>
                            La démocratisation des grappes de calcul (clusters) est née des projets NOW et Beowulf au début des années 1990. Ils ont proposé d’assembler des dizaines de stations de travail normales en grandes plates-formes de calcul. Cette idée présente l’avantage indéniable d’utiliser des technologies traditionnelles et donc un coût de revient très intéressant. Cependant, les réseaux traditionnels qui reliaient alors ces machines ont rapidement fait l’objet de nombreux travaux de recherche afin de réduire l’impact de ces communications externes sur la puissance globale du système. De nombreuses innovations, matérielles et logicielles, ont depuis été proposées pour ce contexte très particulier où le standard de communication MPI est roi. La Direction de la Recherche souhaitent favoriser l'accès des chercheurs et étudiants au calcul haute performance, en les inssitant à monter un projet de RDI (recherche-développement-innovation) à même d'accroître leur compétitivité et de favoriser leur croissance.les chercheurs et les ingénieurs peuvent ainsi résoudre des problèmes scientifiques, commerciaux et d'ingénierie complexes en utilisant des applications demandant:
                        </p>
                        <ul class="features">
                            <li>une bande passante élevée</li>
                            <li>une faible latence du réseau</li>
                            <li>des capacités de calcul très élevées.</li>
                        </ul>
                        <p>
                            En effet, si le HPC reste aujourd'hui essentiellement utilisé par des grands groupes, ce champ reste largement à explorer dans de nombreux domaines d'applications. Cela suppose à la fois de sensibiliser les utilisateurs et de les accompagner, de manière personnalisée, pour garantir leur accès au HPC.
                        </p>
                        <p>
                            Le calcul à haute performance permet de répondre à un besoin concret, de faire plus de calcul plus rapidement (d'une manière exponentielle), il aide a résoudre des problèmes qui sont trop complexes à différentes échelles telle que:
                        </p>
                        <ul class="features">
                            <li>
                                Le coût (si l'expérience demander de grande dépenses il est préférable d'utiliser des simulation que de faire des expériences réelles).
                            </li>
                            <li>
                                Dangers de l'expérience (test de fiabilité d'une voiture et de sa résistance, test de crash d'avion).
                            </li>
                        </ul>
                        <p>
                            il est utilisé aussi quand on ne peut pas faire autrement comme quand on étudie l'inffiniment petit(les molécules) ou l'infiniment grand(les planetes, les étoiles, les constélations), pour être compétitif en réalisant les meilleur(nouveaux) produits avant les autre, réduire les coûts de conception (prototypes virtuels) et réduire les phases de tests réels(plus vite sur le marché).
                        </p>
                        <hr>
                        <h3>Parallélisme:</h3>
                        <p>
                            Pour faire du HPC il faut avant tout savoir que veut dire parallélisme, En informatique, le parallélisme consiste à implémenter des architectures permettant de traiter des informations de manière simultanée, ainsi que les algorithmes spécialisés pour celles-ci. Ces techniques ont pour but de réaliser le plus grand nombre d'opérations en un temps le plus petit possible.
                        </p>
                        <p>
                            Pour simplifier dans notre programme on a des partis indépendante qui utilise des ressource différente dans ce cas on peut les exécuter en même temps par exemple la fonction <strong>A</strong> utilise la ressource <strong>X</strong> pendant un temps et on a la fonction <strong>B</strong> qui utilise la ressource <strong>Y</strong> dans ce cas on a deux manières de procédés, sois en <strong>séquentiels</strong> on commence par la fonction <strong>A</strong> et quand l'exécution, ce fini on passe à la fonction <strong>B</strong> ou bien on fait les deux fonctions en même temps ce qu'on appelle <strong>programmation parallèles</strong>.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section><!--  Introduction Section -->

    <section class="section connection-section">
        <div class="container">
            <h1 class="news--title">Créer Un Compte</h1>
            <div class="news--description">
                <p>
                    Vous pouvez utiliser les ressources de l'UCI aprés avoir créer un compte
                </p>
            </div>
            <a href="{{url('/join')}}" class="c-s-center btn-news">Lire Tout</a>
        </div>
    </section><!--  Connexion Section -->

   @if(!$posts->isEmpty())
       <section id="news" class="section news-section">
           <div class="container">
               <div class="section-title">
                   <h1>Actualités</h1>
               </div>
               <div class="section-content">
                   <div class="c-xs-12 text">
                       @foreach($posts->chunk(2) as $p)
                           <div class="row">
                               @foreach($p as $post )
                                   <div class="c-xs-6 item">
                                       <div class="c-xs-2  c-xs-hide">
                                           <i class="icon icon-news-icon"></i>
                                       </div>
                                       <div class="c-xs-12 c-s-10 new">
                                           <h3>{{link_to_action('PostsController@show',$post->title,[$post->category->slug,$post->slug])}}</h3>
                                           <p>
                                               {{$post->excerpt}}...{{link_to_action('PostsController@show','lire la suite',[$post->category->slug,$post->slug],['class'=>'hashtag'])}}
                                           </p>
                                       </div>
                                   </div>
                               @endforeach
                           </div>
                       @endforeach
                   </div>
               </div>
           </div>
       </section><!--  News Section -->
   @endif

    <section id="contact" class="section contact-section">
        <div class="container">
            <div class="row content">
                <div class="section-title">
                    <h1>Contactez Nous</h1>
                </div>
                <div class="section-description">
                    <p>
                        Vous Pouvez nous contactez Via notre E-mail
                    </p>
                </div>
                <div class="section-content">
                    <div class="c-xs-12 c-s-6 information">
                        <h2 class="title">Information</h2>
                        <address>
                            <h3>
                                Université des sciences et  de la technologie
                                d’Oran
                            </h3>
                            <h3>Adresse : </h3>
                            <p>USTO, Oran, Algérie</p>
                            <h3>Téléphone :</h3>
                            <p>041-62-71-55 (Rectorat)</p>
                            <h3>E-mail :</h3>
                            <p>sidahmed.sabeur@univ-usto.dz</p>
                        </address>
                    </div>
                    <div class="c-xs-12 c-s-6">
                        {!! Form::open(['action' => 'UsersController@fromVisitor', 'class' => 'form']) !!}
                        <div class="f-wrapper">
                            <div class="f-body">
                                @include('errors._field_error_list')
                                <div class="f-group text-field">
                                    {!! Form::label('name' ,'Your name',['class' => 'f-control']) !!}
                                    {!! Form::text('name' ,$signedIn? $user->name : old('name'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('email' ,'You email',['class' => 'f-control']) !!}
                                    {!! Form::email('email' ,$signedIn? $user->email : old('email'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('subject' ,'Subject',['class' => 'f-control']) !!}
                                    {!! Form::text('subject' ,old('subject'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('email_content' ,'Message',['class' => 'f-control']) !!}
                                    {!! Form::textarea('email_content' ,old('email_content'),['class' => 'f-control']) !!}
                                </div>
                            </div>
                            <div class="f-footer">
                                <div class="f-submit">
                                    {!! Form::submit('Send',['class' => 'f-btn-reset']) !!}
                                </div>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!--  Contact Section -->
    <section class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.7233344069773!2d-0.5813110929626214!3d35.70798473238949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e628c55555555%3A0xef7ff1b0e92ef57f!2sOran+University+of+Science+and+Technology+-+Mohamed+Boudiaf!5e0!3m2!1sen!2sdz!4v1469614753532" id="map" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>
@stop
