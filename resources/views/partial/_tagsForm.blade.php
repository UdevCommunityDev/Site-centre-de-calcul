@include('errors._field_error_list')
<div class="f-group text-field">
    {!! Form::label('tag' ,'Hachtag',['class' => 'f-control']) !!}
    {!! Form::text('name' ,old('name'),['id' => 'tag' ,'class' => 'f-control']) !!}
</div>
<div class="f-group text-field">
    {!! Form::label('description' ,'Déscription : ',['class' => 'f-control']) !!}
    {!! Form::textarea('description' ,old('textarea'),['class' => 'f-control']) !!}
</div>
<br>
<div class="f-submit">
    {!! Form::submit($submitText,['class' => 'f-btn-submit']) !!}
</div>