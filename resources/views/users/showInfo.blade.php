@extends('outputs._fullPageOutPut')

@section('title')
    {{$member->name}}
@stop

@section('body')
    <section class="section user-info">
        <div class="row">
            <div class="c-xs-12 c-s-10 c-s-center p">
                <div class="portion">
                    <div class="container">
                        <div class="head">
                            <h2 class="username">{{$member->name}} ({{$member->email}})</h2>
                        </div>
                        <hr>
                        @if(!empty($member->info))
                            @if(!$member->info->public)
                                <p>
                                    nothing to show about <strong class="info">{{$member->name}}</strong>
                                </p>
                            @else
                                <div class="c-xs-12 c-s-9 profile-info">
                                    <div class="c-xs-12 c-s-6">

                                        {!! $member->getInfo('First Name ','first_name') !!}


                                        {!! $member->getInfo('Last Name','last_name') !!}


                                        {!! $member->getInfo('Live In','live_in') !!}


                                        {!! $member->getInfo('Tel','tel') !!}


                                        {!! $member->getInfo('Work As','work') !!}


                                        {!! $member->getInfo('Work At','work_at') !!}


                                        {!! $member->getInfo('Studied At','studied_at') !!}

                                    </div>
                                    @if(!empty($member->info->about_you))
                                        <div class="c-xs-12 info-area">
                                            <strong>About
                                    <span class="info">
                                        {{$member->name}}
                                    </span>
                                            </strong>
                                            <p>
                                                {{$member->info->about_you}}
                                            </p>
                                        </div>
                                    @endif
                                </div>
                                <div class="c-xs-12 c-s-3 profile-pic">
                                    <img src="{{asset($member->info->pic->tn_path)}}" alt="{{$member->name}}"  />
                                </div>
                            @endif
                        @else
                            <p>
                                nothing to show about <strong class="info">{{$member->name}}</strong>
                            </p>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </section>
@stop