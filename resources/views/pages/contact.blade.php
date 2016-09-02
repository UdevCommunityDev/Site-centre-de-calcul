@extends('outputs._fullPageOutPut')

@section('title')
    Uci | Contact
@stop
@section('body')
    <section id="contact" class="section contact-section">
        <div class="container">
            <div class="row content portion">
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

