@extends('outputs._adminPageOutPut')

@section('title')
    {{$email->subject}}
@stop

@section('body')
    <section class="section model-lists-section">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="c-xs-12 c-s-6 c-s-center p ">
                        <div class="portion">
                            <div class="row">
                                <div class="row">
                                    {{link_to_action("AdminController@emails","&#x2190;Emails",[],['class' => 'go-back'])}}
                                </div>
                                <div class="row read-email">
                                    <h3>Subject: {{$email->subject}}</h3>
                                    <h5>From: {{$email->from}} ({{$email->name}})</h5>
                                    <hr>
                                    <p>
                                        {{$email->email_content}}
                                    </p>
                                    <hr>
                                    <div class="row">
                                        <a href="{{url('admin/emails/?from='.$email->from)}}" class="btn btn-info right">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop