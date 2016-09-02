@extends('outputs._fullPageOutPut')

@section('title')
    Connexion
@stop
@section('content')
    <section class="auth-section">
        <div class="container">
            <div class="row">
                 <div class="c-xs-12 c-s-8 c-m-4 c-s-center">
                     {!! Form::open(['action' => 'Auth\AuthController@login', 'class' => 'form']) !!}

                     <div class="f-wrapper">
                         <div class="f-head">
                             <span class="f-head-title">Login</span>
                         </div>
                        @include('errors._field_error_list')
                         <div class="f-body">
                             <div class="f-group text-field {{ $errors->any() ? ' f-group-error' : '' }} ">
                                 {!! Form::label('email' ,'Email',['class' => 'f-control']) !!}
                                 {!! Form::email('email' ,old('email'),['class' => 'f-control']) !!}
                             </div>
                             <div class="f-group text-field {{ $errors->any() ? ' f-group-error' : '' }}">
                                 {!! Form::label('password' ,'Password',['class' => 'f-control']) !!}
                                 {!! Form::password('password' ,['class' => 'f-control']) !!}
                             </div>
                             <div class="f-group check-field">
                                 {!! Form::checkbox('remember' ,null,null,['id' => 'remember' ,'class' => 'f-control']) !!}
                                 {!! Form::label('remember' ,'Remember me',['class' => 'f-control']) !!}
                                 <span></span>
                             </div>
                             <a class="f-forgot" href="{{ url('/password/reset') }}">Forgot Your Password?</a>
                         </div>
                         <div class="f-footer">
                             <div class="f-submit">
                                 {!! Form::submit('Login',['class' => 'f-btn-reset']) !!}
                             </div>
                         </div>
                     </div>
                      {!! Form::close() !!}

                 </div>
            </div>
        </div>
    </section>
@endsection


