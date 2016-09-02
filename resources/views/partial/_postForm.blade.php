
<div class="c-xs-12 create-post-title ">
    <div class="f-group text-field is-focused l-field {{ $errors->has('title') ? ' f-group-error' : ''}}">
        {!! Form::label('title' ,'Titre :',['class' => 'f-control']) !!}
        {!! Form::text('title' ,old('title'),['class' => 'f-control','autofocus']) !!}
    </div>
</div>

<div class="c-xs-12 c-m-7 create-post-content">
    <div class="f-group text-field is-focused {{ $errors->has('content') ? ' f-group-error' : ''}}">
        {!! Form::label('content' ,'Contenu : ',['class' => 'f-control']) !!}
        {!! Form::textarea('content' ,old('content'),['class' => 'f-group']) !!}
    </div>
</div>

<div class="c-xs-12 c-m-4 create-post-config">

    <div class="f-group text-field is-focused {{ $errors->has('slug') ? ' f-group-error' : ''}}">
        {!! Form::label('slug' ,'Slug : ',['class' => 'f-control']) !!}
        {!! Form::text('slug' ,old('slug'),['class' => 'f-control','readonly']) !!}
    </div>

    <div class="f-group text-field is-focused">
        {!! Form::label('excerpt' ,'Extrait ( La valeur par défaut c\'est le premier paragraphe ) :',['class' => 'f-control']) !!}
        {!! Form::textarea('excerpt' ,old('textarea'),['class' => 'f-control']) !!}
    </div>

    <div class="f-group select-field is-focused {{ $errors->has('category') ? ' f-group-error' : ''}}">
        {!! Form::label('category' ,'Catègorie : ',['class' => 'f-control']) !!}
        {!! Form::select('category_id' ,$categories,null,['class' => 'f-control select','style'=>'width: 100%']) !!}
    </div>

    <div class="f-group select-field is-focused {{ $errors->has('tag_list') ? ' f-group-error' : ''}} ">
        {!! Form::label('tag_list' ,'Tag : ',['class' => 'f-control']) !!}
        {!! Form::select('tag_list[]' ,$tags,null,['class' => 'f-control select','style'=>'width: 100%','multiple']) !!}
    </div>

    <div class="f-group date-field is-focused {{ $errors->has('published_at') ? ' f-group-error' : ''}}">
        {!! Form::label('published_at' ,'Publié à ',['class' => 'f-control']) !!}
        {!! Form::input('date','published_at' ,$posts->published_at,['class' => 'f-control']) !!}
    </div>

    <div class="f-group file-field is-focused {{ $errors->has('file') ? ' f-group-error' : ''}}">
        {!! Form::label('uploadedFile_input' ,'Picture :',['class' => 'f-control']) !!}
        {!! Form::input('file','file' ,null,['id' => 'uploadedFile_input' ,'class' => 'f-control']) !!}
        <div id="uploadedFile_preview_container" class="c-xs-12 uploadedFile_preview_container">
            @if(!empty($posts->photo->tn_path))
                <img  id="uploadedFile_preview_old" src="{{asset($posts->photo->tn_path)}}" alt="your image"  />
            @endif
            <img id="uploadedFile_preview" src="#" alt="your image"  />
        </div>
    </div>

    <br>

    <div class="f-reset">
        {!! Form::reset('Reset',['class' => 'f-btn-reset']) !!}
    </div>

    <div class="f-submit">
        {!! Form::submit($submitText,['class' => 'f-btn-submit']) !!}
    </div>

</div>


