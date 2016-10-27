@extends('outputs._fullPageOutPut')

@section('title')
    Uci | Inscription
@stop

@section('body')
     <section class="join-section">
        <div class="container">
            <div class="row  content portion">
                <div class="row">
                    <div class="c-xs-12 c-s-8 c-s-center">
                        <h1 class="join-signup">Inscription</h1>
                        <i class="icon icon-inscription"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="overview  c-xs-12 c-s-8 c-s-center">
                        <h2 class="title overview-title">Overview</h2>
                        <div class="overview-content">
                            <p>
                                L’Unité de Calcul Intensif de l'USTO-MB met à la disposition des chercheurs
                                des moyens informatiques leur permettant de résoudre des problèmes
                                de calcul scientifique nécessitant des ressources importantes de calcul
                                en termes de cycles processeurs, d’espace mémoire et d’espace
                                de stockage disque.
                            </p>
                            <p>
                                L’UCI est géré par un administrateur. Il veille, d’un coté,
                                au bon fonctionnement du système et, d’un autre coté, à faire respecter
                                les clauses de la Charte et particulièrement les clauses relatives à la sécurité,
                                à la confidentialité et aux règles de bon usage.
                            </p>
                            <p>
                                L’administrateur peut être amené à surveiller les sessions de travail
                                d'un utilisateur s'il existe un soupçon de non respect de la Charte.
                                Il peut également être amené à désactiver temporairement ou
                                définitivement un compte utilisateur en cas de non respect des clauses
                                de la Charte de l’UCI.
                            </p>
                            <p>
                                Il peut aussi arrêter une tâche utilisateur si une utilisation
                                excessive de ressources nuit aux autres utilisateurs (avec ou sans préavis,
                                selon l'urgence du problème).
                            </p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class=" c-xs-12 c-s-8 c-s-center access">
                        <h2 class="title access-title">Conditions d’accès</h2>
                        <div class="access-content">
                            <p>
                                Pour l’accès aux ressources de calcul de l’UCI, l’utilisateur soumet
                                une demande d’ouverture de compte.
                            </p>
                            <p>
                                Le formulaire doit être dûment renseigné et signé par le responsable
                                scientifique (le directeur du laboratoire si le demandeur est membre
                                d’un laboratoire de recherche affilié à l’université d’Oran) ou,
                                le cas échéant, le responsable administratif (chef de département, doyen).

                            </p>
                            <p>
                                La demande est étudiée par le comité de pilotage de l’UCI et,
                                si elle est acceptée, un compte (identifiant + mot de passe) est créé
                                et activé et les informations sur le compte (identifiant, mot de passe,
                                durée de validité du compte) sont transmises par email au demandeur.
                            </p>
                            <p>
                                Dès l’activation de son compte, l’utilisateur peut utiliser les ressources
                                informatiques de l’UCI et sera, par conséquent,
                                tenu de respecter les règles de confidentialité,de sécurité et de bon usage
                                en vigueur et définies dans les sections suivantes.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="c-xs-12 c-s-8 c-s-center download-block">
                        <a href="{{asset('uploaded/files/formulaire_uci_ustomb.pdf')}}" class="btn btn-info download " download> Télécharger Le formulaire</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop