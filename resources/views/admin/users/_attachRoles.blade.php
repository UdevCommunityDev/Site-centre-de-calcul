<div class="c-xs-6 p">
    <div class="portion">
        <div class="row attach-roles">
            <h4> Attach Roles</h4>
            {!! Form::open(['action' =>'UsersController@attacheRole' , 'class' => 'form']) !!}
            <div class="row">
                <div class="c-xs-6 f-group select-field">
                    {!! Form::label('user' ,'Member :',['class' => 'f-control']) !!}
                    {!! Form::select('user' ,$users,null,['class' => 'f-control select']) !!}
                </div>
                <div class="c-xs-6 f-group select-field">
                    {!! Form::label('role' ,'Role :',['class' => 'f-control']) !!}
                    {!! Form::select('role' ,$roles,null,['class' => 'f-control select']) !!}
                </div>
            </div>
            <br>
            <div class="row">
                <div class="f-submit">
                    {!! Form::submit('Attach',['class' => 'f-btn-submit']) !!}
                </div>
            </div>
            {!! Form::close() !!}
        </div>
    </div>
</div>