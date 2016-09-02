@extends('outputs._fullPageOutPut')

@section('title')
    Email confirmation
@stop

@section('body')
    <section class="auth-section">
        <div class="container">
            <div class="row">
                <div class="c-xs-12 c-s-8 c-m-4 c-s-center">
                    {!! Form::open(['action' => 'Auth\PasswordController@sendResetLinkEmail', 'class' => 'form']) !!}

                    <div class="f-wrapper">
                        <div class="f-head">
                            <span class="f-head-title">Password reset</span>
                        </div>
                        @if($errors->any())
                            <div class="messages error">
                                @foreach($errors->all() as $k =>$v)
                                    <li>{{$v}}</li>
                                @endforeach
                            </div>
                        @endif
                        @if(session('status'))
                            <div class="messages success">
                                {{session('status')}}
                            </div>
                        @endif

                        <div class="f-body">
                            <div class="f-group text-field {{ $errors->any() ? ' f-group-error' : '' }} ">
                                {!! Form::label('email' ,'Email',['class' => 'f-control']) !!}
                                {!! Form::email('email' ,old('email'),['class' => 'f-control']) !!}
                            </div>

                        </div>
                        <div class="f-footer">
                            <div class="f-submit">
                                {!! Form::submit('Send',['class' => 'f-btn-submit']) !!}
                            </div>
                        </div>
                    </div>

                    {!! Form::close() !!}

                </div>

            </div>
        </div>
    </section>

@endsection
