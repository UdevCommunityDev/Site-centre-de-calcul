@extends('outputs._fullPageOutPut')

@section('title')
    Register
@stop

@section('body')
   <section class="auth-section">
       <div class="container">
           <div class="row">
               <div class="c-xs-12 c-s-8 c-m-4 c-s-center">
                  {!! Form::open(['action' => 'Auth\AuthController@register', 'class' => 'form']) !!}
                  <div class="f-wrapper">
                      <div class="f-head">
                          <span class="f-head-title">Register</span>
                      </div>
                      @if($errors->any())
                          <ul class="messages error">
                              @foreach($errors->all() as $k =>$v)
                                   <li>{{$v}}</li>
                              @endforeach
                          </ul>
                      @endif
                      <div class="f-body">
                          <div class="f-group text-field {{ $errors->has('name') ? ' f-group-error' : '' }}">
                              {!! Form::label('name' ,'Username',['class' => 'f-control']) !!}
                              {!! Form::text('name' ,old('name'),['class' => 'f-control']) !!}
                          </div>
                          <div class="f-group text-field {{ $errors->has('email') ? ' f-group-error' : '' }}">
                              {!! Form::label('email' ,'Email',['class' => 'f-control']) !!}
                              {!! Form::email('email' ,old('email'),['class' => 'f-control']) !!}
                          </div>
                          <div class="f-group text-field {{ $errors->has('password') ? ' f-group-error' : '' }}">
                              {!! Form::label('password' ,'Password',['class' => 'f-control']) !!}
                              {!! Form::password('password' ,['class' => 'f-control']) !!}
                          </div>
                          <div class="f-group text-field">
                              {!! Form::label('password_confirmation' ,'Password confirmation',['class' => 'f-control']) !!}
                              {!! Form::password('password_confirmation' ,['class' => 'f-control']) !!}
                          </div>
                      </div>
                      <div class="f-footer">
                          <div class="f-reset">
                              {!! Form::reset('reset',['class' => 'f-btn-reset']) !!}
                          </div>
                          <div class="f-submit">
                              {!! Form::submit('register',['class' => 'f-btn-reset']) !!}
                          </div>
                      </div>
                  </div>

                  {!! Form::close() !!}
               </div>
           </div>
       </div>
   </section>
   <div class="cb"></div>
   
@endsection