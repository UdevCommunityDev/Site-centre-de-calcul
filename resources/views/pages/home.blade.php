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
            <div class="row summary">
                <div id="cluster" class="row portion item">
                    <i class="icon icon-cluster-icon"></i>
                    <h1><a href="#cluster" class="item-title">Cluster</a></h1>
                    <h3 class="item-description">Présentation du cluster.</h3>
                    <div class="service-description">
                        <div class="row">
                            <h2 class="service-title">Super ordinateur</h2>
                            <div class="row">
                                <div class="row service-into">
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
                            <div class="row">
                                <div class="c-xs-12 components">
                                    <div class="row">
                                        <div class="c-xs-2">
                                            <img src="{{asset('img/Cray_ordi.jpg')}}" alt="personal Pc">
                                        </div>
                                        <div class="c-xs-10">
                                            <p>
                                                Pour donner un point de repère, un processeur standard récent, qu’on peut avoir dans un ordinateur personnel (PC), peut dépasser le 1 GFLOPS. Il a la même puissance que le supercalculateur le plus performant en 1983, le Cray Vector X-MP.
                                                <a href="http://www.leconews.com/fr/actualites/nationale/services/un-supercalculateur-ibm-pour-l-universite-11-02-2013-162079_296.php"> <span class="hashtag">Un supercalculateur IBM pour l'université</span></a>
                                            </p>
                                            <p>
                                                Une machine atteignant 1 TFLOPS, serait donc 1000 fois plus rapide qu’un PC.
                                            </p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="c-xs-2">
                                            <img src="{{asset('img/processeur_ordi.jpg')}}" alt="processor">
                                        </div>
                                        <div class="c-xs-10">
                                            <p>
                                                Un supercalculateur est caractérisé par:
                                            </p>
                                            <h4>Le nombre de noeuds :</h4>
                                            <p>
                                                Un noeuds correspond a une unite physique de calcul, compose de processeurs, ou chaque processeur est compose de cores. Soit un cluster CL dont le noeuds est a base d'un Intel Nehalem EX, a huit processeurs. Chaque processeur a huit cores, faisant 64 cores par noeud. Le noeuds dispose d'une memoire interne de 128 GigaByte.
                                            </p>
                                            <h4>Le nombre de cores :</h4>
                                            <p>
                                                Le nombre de cores est simplement le nombre de noeuds multiplie par le nombre de cores par noeud. Supposons que le cluster CL a 176 noeuds, il a donc 11 264 cores.
                                            </p>
                                            <h4>La taille de la memoire vive :</h4>
                                            <p>
                                                La taille est aussi le nombre de noeuds par la taille de la memoire par noeud. Dans notre exemple CL, on aurait 176*128, faisant 22 528 GB.
                                            </p>
                                            <h4>La taille des disques :</h4>
                                            <p>
                                                Mesure en TOctets de la taille des disques. Dans le cluster CL, les disques atteignent 61 TeraByte, ou encore 16 000 GigaByte.
                                            </p>
                                            <h4>Peak performance :</h4>
                                            <p>
                                                C'est la mesure en FLOPS de la puissance max du supercalculateur. Sur le cluster CL qu'on vient de decrire, on devrait atteindre les 103 TFlops, car chaque core delivre 9.2 GFlops (2.3 GHz * 4 Flop = 9.2 GFlops), il y a 64 cores dans chacun des 176 noeuds, nous avons donc 9.2*64*176 = 103628 GFlops = 103 TFlops
                                            </p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="c-xs-2">
                                            <img src="{{asset('img/OSs.jpg')}}" alt="operating systems">
                                        </div>
                                        <div class="c-xs-10">
                                            <p>
                                                on peut classer les systèmes d'exploitation pour superordinateurs comme suite:
                                            </p>
                                            <ul class="features">
                                                <li>
                                                    <strong>Linux</strong> est le système d’exploitation équipant la très grande majorité des 500 supercalculateurs les plus puissants de la planète (92,4 % en juin 2012)12,13.
                                                </li>
                                                <li>
                                                    <strong>Unix</strong> perd progressivement du terrain face à Linux, mais occupe encore une place de choix sur le marché des supercalculateurs (5 %).
                                                </li>
                                                <li>
                                                    <strong>Windows</strong> n’est exécuté que par 2 des 500 supercalculateurs les plus puissants de la planète, soit 0,4 %12.
                                                </li>
                                                <li>
                                                    <strong>BSD</strong> quant à lui, ne dispose que d’une seule représentation dans le top 500, soit 0,2 %.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="c-xs-2">
                                            <img src="{{asset('img/idees.png')}}" alt="ideas">
                                        </div>
                                        <div class="c-xs-10">
                                            <p>
                                                Pour fixer les idées:
                                            </p>
                                            <ul class="features">
                                                <li>
                                                    1 kflop/s = 103 opérations sur des nombres réels:1 page rectoverso avec 5 colonnes de 100 nombres réels chacune traités en 1 seconde
                                                </li>
                                                <li>
                                                    106 flop/s (1 Mflop):1000 pages 2 rames de papier (10 cm de hauteur)
                                                </li>
                                                <li>
                                                    109 flop/s (1 Gflop):1 colonne de 100m de rames de papier (2ième étage tour Eiffel)
                                                </li>
                                                <li>
                                                    1012flop/s (1 Tflop):1 colonne 100km (mésosphère Météores)
                                                </li>
                                                <li>
                                                    1015flop/s (1 Pflop):100 000 km (1/3 distance terre-lune)
                                                </li>
                                                <li>
                                                    1018flop/s (1 Exaflop).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="c-xs-12 c-s-10 c-s-center cluster">
                                    <h3>Cluster</h3>
                                    <div class="c-xs-6">
                                        <img src="{{asset('img/cluster.jpg')}}" alt=" cluster">
                                    </div>
                                    <div class="c-xs-6 data">
                                        <h3>Unité de mesure</h3>
                                        <h4>FLOPS EQUIVALENT	NOM COMPLET</h4>
                                        <table class="c-xs-12">
                                            <tbody class="c-xs-12">
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>24</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Yflops
                                                </td>
                                                <td class="c-xs-4">
                                                    YOTTAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>21</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Zflops
                                                </td>
                                                <td class="c-xs-4">
                                                    ZETTAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>18</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Eflops
                                                </td>
                                                <td class="c-xs-4">
                                                    EXAFlops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>15</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Pflops
                                                </td>
                                                <td class="c-xs-4">
                                                    PETAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>12</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Tflops
                                                </td>
                                                <td class="c-xs-4">
                                                    TERAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>9</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Gflops
                                                </td>
                                                <td class="c-xs-4">
                                                    GIGAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>6</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Mflops
                                                </td>
                                                <td class="c-xs-4">
                                                    MEGAflops
                                                </td>
                                            </tr>
                                            <tr class="c-xs-12">
                                                <td class="c-xs-4">
                                                    10<sup>3</sup>
                                                </td>
                                                <td class="c-xs-4">
                                                    Kflops
                                                </td>
                                                <td class="c-xs-4">
                                                    KILOflops
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Domaines" class="row portion item">
                    <i class="icon icon-use-d-icon"></i>
                    <h1><a href="#Domaines" class="item-title">Domaines d’utilisation</a></h1>
                    <h3 class="item-description">
                        Différents domaines d'application
                        d'un SuperOrdinateur.
                    </h3>
                    <div class="service-description">
                        <div class="row">
                            <h2 class="service-title">Domaine d'application</h2>
                            <div class="row service-into">
                                <p>
                                    Les superordinateurs sont de plus en plus important dans la communauté scientifique, où les besoins en calculs à haute performance (HPC) sont toujours croissants,utilisés pour toutes les tâches qui nécessitent une très forte puissance de calcul comme les prévisions météorologiques, l’étude du climat, la modélisation moléculaire (calcul des structures et propriétés de composés chimiques…), les simulations physiques (simulations aérodynamiques, calculs de résistance des matériaux, simulation d’explosion d’arme nucléaire, étude de la fusion nucléaire…), la cryptanalyse, les simulations en finance et assurance (Calcul stochastique), ainsi qu'en imagerie numérique notamment pour les images de synthèse au travers des fermes de rendu. En Informatique de gestion.
                                </p>

                            </div>
                            <div class="c-xs-12 components">
                                <div class="row">
                                    <h3>Science :</h3>
                                    <ul>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Climatologie (La prévision numérique du temps) :</h4>
                                                <p>
                                                    Un modèle climatique est une modélisation mathématique du climat dans une zone géographique donnée. Un modèle climatique est construit de façon à être le plus précis possible et surtout le plus efficace
                                                </p>
                                                <p>
                                                    La prédiction climatique a été révolutionné par les satellites artificiels qui collectent de nombreuses données sur l'état de l'atmosphère (humidité, nébulosité, température…), de même que par le développement des stations météorologiques au sol.
                                                </p>
                                                <p>
                                                    La puissance de calcul informatique est donc déterminante en climatologie, car elle permet d'adjoindre plus de paramètres au modèle, mais aussi de diminuer le maillage au sol. On constate ainsi que le temps de calcul pour simuler un mois d'évolution a été divisé par plus de 100 entre 1980 et 2000. L'utilisation de supercalculateurs est actuellement la norme.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>L'astrophysique:</h4>
                                                <p>
                                                    Les astrophysiciens utilisent une grande variété d’outils comme les modèles analytiques (tels que les polytropes pour obtenir le comportement approximatif d’une étoile) ou la simulation numérique sur ordinateur. Chaque outil a ses avantages. Les modèles analytiques d’un processus sont généralement meilleurs pour obtenir le fonctionnement interne. Les modèles numériques, eux, peuvent révéler l’existence de phénomènes et d’effets qui ne pourraient être vus autrement
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Biologie, Genomique, Pharmacologie :</h4>
                                                <p>
                                                    L'annotation des génomes est une <strong> analyse informatique</strong> des séquences obtenues lors du séquençage permettant d'identifier les séquences informatives des génomes. Ces séquences sont principalement les gènes. La plupart de ceux-ci sont identifiés soit par leur similitude avec des gènes déjà connus, soit par une prédictions en fonction de la séquence (présence d'une phase ouverte de lecture caractérisée par un codon d'initiation de la traduction, puis au moins 100 codons et enfin un codon stop. Mais il existe aussi des « gènes morcelés » (contenant des introns) ou codant des ARN fonctionnels, ceux-ci doivent être prédit par des algorithmes différents.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Nanotechnologie :</h4>
                                                <p>
                                                    Les nanosciences et nanotechnologies peuvent être définies comme l'ensemble des études et des procédés de fabrication et de manipulation de structures (électroniques, chimiques, etc...), de dispositifs et de systèmes matériels à l'échelle du nanomètre.
                                                </p>
                                                <p>
                                                    les nanosciences sont l’étude des phénomènes et de la manipulation de la matière aux échelles atomique, moléculaire et macromoléculaire Les nanotechnologies, quant à elles, concernent la conception, la caractérisation, la production et l’application de structures, dispositifs et systèmes par le contrôle de la forme et de la taille à une échelle nanométrique.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr>
                                <div class="row">
                                    <h3>Ingénierie :</h3>
                                    <ul>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Energie:( SONELGAZ ,SONATRACH ).</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Simulation de crash.</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Tremblement de terre.</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Mecanique des fluides.</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Combustion: ( La Propagation de feu ).</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr>
                                <div class="row">
                                    <h3>Economie :</h3>
                                    <ul>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Marché financier. </h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr>
                                <div class="row">
                                    <h3>Défense :</h3>
                                    <ul>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Cryptographie. </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="c-xs-10">
                                                <h4>Nucléaire. </h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hpc" class="row portion item">
                    <i class="icon icon-hpc-icon"></i>
                    <h1><a href="#hpc" class="item-title">HPC</a></h1>
                    <h3 class="item-description">
                        Définition de
                        High Performance Computing.
                    </h3>
                    <div class="service-description">
                        <div class="row">
                            <h2 class="service-title">Il était une fois des réseaux spécialisés pour le HPC</h2>
                            <div class="row service-into">
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
            </div>
        </div>
    </section><!--  Introduction Section -->
@stop

@section('scripts')
    <script type="application/javascript" src="{{asset("js/tabs.js")}}"></script>
@stop