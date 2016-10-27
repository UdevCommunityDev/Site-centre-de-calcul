@can('alter-profile')
    <div class="c-xs-12 c-s-4 p">
        <div class="portion">
            <div class="container">
                {!! Form::model($member ,['method'=> 'PUT','action' =>'UsersController@updateInitInfo' , 'class' => 'form']) !!}
                <div class="c-xs-12">
                    <h4>Update info</h4>
                    <hr>
                    <div class="row">
                        <div class="c-cx-12 c-s-10 c-s-center f-group text-field">
                            {!! Form::label('label' ,'Username',['class' => 'f-control']) !!}
                            {!! Form::text('name' ,old('text'),['class' => 'f-control']) !!}
                        </div>
                        <div class="c-cx-12 c-s-10 c-s-center f-group text-field">
                            {!! Form::label('label' ,'Current password',['class' => 'f-control']) !!}
                            {!! Form::password('current_password' ,['class' => 'f-control']) !!}
                        </div>
                    </div>
                    <div class="row">
                        <div class="c-cx-12 c-s-10 c-s-center f-group text-field">
                            {!! Form::label('label' ,'New password',['class' => 'f-control']) !!}
                            {!! Form::password('password' ,['class' => 'f-control']) !!}
                        </div>
                        <div class="c-cx-12 c-s-10 c-s-center f-group text-field">
                            {!! Form::label('label' ,'Confirm new password',['class' => 'f-control']) !!}
                            {!! Form::password('password_confirm' ,['class' => 'f-control']) !!}
                        </div>
                    </div>
                    <br>
                    <div class="c-xs-10 right">
                        <br>
                        <div class="f-submit">
                            {!! Form::submit('Update',['class' => 'f-btn-submit']) !!}
                        </div>
                    </div>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endcan