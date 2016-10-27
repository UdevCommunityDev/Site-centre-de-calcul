@extends('outputs._fullPageOutPut')

@section('title')
    {{$member->name}}
@stop

@section('body')
    <section class="section user-info-form">
        <div class="row">
           <div class="c-xs-12 c-s-8 p">
               <div class="portion">
                   <div class="container">
                       <div class="head">
                           <h2 class="username">{{$member->name}} ({{$member->email}})</h2>
                           @if(!is_null($member->info))
                               <a href="{{action('UsersController@publish',[$member->id])}}" class="btn btn-info published">{{$member->info->public ? 'Unpublish':'Publish'}}</a>
                           @endif
                       </div>
                       <hr>
                       {!! Form::model($info = $member->info ,['method' => 'PUT','action' =>'UsersController@storeInfo' , 'class' => 'form','files' => true]) !!}
                       <div class="c-xs-12 c-s-9 profile-info">
                            <div class="c-xs-12 c-s-8">
                                <div class="f-group text-field">
                                    {!! Form::label('first_name' ,'First Name: ',['class' => 'f-control']) !!}
                                    {!! Form::text('first_name' ,old('first_name'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('last_name' ,'Last Name: ',['class' => 'f-control']) !!}
                                    {!! Form::text('last_name' ,old('last_name'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('live_in' ,'Live In: ',['class' => 'f-control']) !!}
                                    {!! Form::text('live_in' ,old('live_in'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('tel' ,'Tel: ',['class' => 'f-control']) !!}
                                    {!! Form::tel('tel' ,old('tel'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('work' ,'Work: ',['class' => 'f-control']) !!}
                                    {!! Form::text('work' ,old('work'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('work_at' ,'Work At: ',['class' => 'f-control']) !!}
                                    {!! Form::text('work_at' ,old('work_at'),['class' => 'f-control']) !!}
                                </div>
                                <div class="f-group text-field">
                                    {!! Form::label('studied_at' ,'Studied At: ',['class' => 'f-control']) !!}
                                    {!! Form::text('studied_at' ,old('studied_at'),['class' => 'f-control']) !!}
                                </div>
                            </div>
                            <div class="c-xs-12">
                                <div class="f-group text-field">
                                  {!! Form::label('about_you' ,'About You',['class' => 'f-control']) !!}
                                  {!! Form::textarea('about_you' ,old('about_you'),['class' => 'f-control']) !!}
                                </div>
                            </div>
                       </div>
                       <div class="c-xs-3 profile-pic">
                           <div class="f-group file-field is-focused {{ $errors->has('file') ? ' f-group-error' : ''}}">
                               {!! Form::label('uploadedFile_input' ,'Picture :',['class' => 'f-control']) !!}
                               {!! Form::input('file','file' ,null,['id' => 'uploadedFile_input' ,'class' => 'f-control']) !!}
                               <div id="uploadedFile_preview_container" class="c-xs-12 uploadedFile_preview_container">
                                  @if(!empty($member->info->pic->tn_path))
                                       <img  id="uploadedFile_preview_old" src="{{asset($member->info->pic->tn_path)}}" alt="your image"  />
                                   @endif
                                   <img id="uploadedFile_preview" src="#" alt="your image"  />
                               </div>
                           </div>
                       </div>
                       <div class="c-xs-9">
                           <br>
                           <div class="f-submit">
                               {!! Form::submit('Change',['class' => 'f-btn-submit']) !!}
                           </div>
                       </div>
                       {!! Form::close() !!}
                   </div>
               </div>
           </div>
            @include('admin.profile')
        </div>
    </section>
@stop