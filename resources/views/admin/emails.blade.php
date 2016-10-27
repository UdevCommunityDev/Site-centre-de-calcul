@extends('outputs._adminPageOutPut')

@section('page')
    Emails
@stop

@section('body')
    <section class="section model-lists-section">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="portion">
                        <div class="row">
                            <h2 class="model-title">Emails</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="c-xs-6 p">
                        <div class="portion">
                            <div class="row send-emails">
                                <h4>Send Email</h4>
                                {!! Form::open(['action' =>'UsersController@fromSupport' , 'class' => 'form']) !!}
                                <div class="f-group text-field">
                                    {!! Form::label('email' ,'To : ',['class' => 'f-control']) !!}
                                    {!! Form::email('email' ,app('request')->input('from') ? app('request')->input('from') : old('email'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('subject' ,'Subject : ',['class' => 'f-control']) !!}
                                    {!! Form::text('subject' ,old('subject'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('email_content' ,'Message : ',['class' => 'f-control']) !!}
                                    {!! Form::textarea('email_content' ,old('email_content'),['class' => 'f-control']) !!}
                                </div>
                                <br>
                                <div class="f-submit">
                                    {!! Form::submit('Send',['class' => 'f-btn-submit']) !!}
                                </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                    <div class="c-xs-6 p">
                        <div class="portion">
                            <div class="row received-emails">
                                <h4>Unread ({{$unread}})</h4>
                                @foreach($emails as $email)
                                    <a href="{{route('admin.email',[$email->id])}}" class="c-xs-10 item {{!$email->unread ? 'unread' : ''}}">
                                        <h5 class="email-sender">{{$email->name}}: ({{$email->subject}})</h5>
                                        <p class="email_content">{{$email->excerpt()}}</p>
                                    </a>
                                    <span class="c-xs-1 close-btn">
                                    {!! Form::open(['method' => 'DELETE','action' =>['AdminController@destroyEmail',$email->id] , 'class' => 'form']) !!}
                                        <div class="f-submit f-danger">
                                            {!! Form::submit('x',['class' => 'f-btn-reset']) !!}
                                        </div>
                                    {!! Form::close() !!}
                                    </span>
                                @endforeach
                            </div>
                            <hr>
                            {{$emails->links()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop