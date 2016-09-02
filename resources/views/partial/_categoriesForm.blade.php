<div class="f-group text-field">
    {!! Form::label('name' ,'Catégorie : ',['class' => 'f-control']) !!}
    {!! Form::text('name' ,old('name'),['class' => 'f-control']) !!}
</div>
<div class="f-group text-field">
    {!! Form::label('description' ,'Déscription : ',['class' => 'f-control']) !!}
    {!! Form::textarea('description' ,old('description'),['class' => 'f-control']) !!}
</div>
<br>
<div class="f-submit">
    {!! Form::submit($submitText,['class' => 'f-btn-submit']) !!}
</div>