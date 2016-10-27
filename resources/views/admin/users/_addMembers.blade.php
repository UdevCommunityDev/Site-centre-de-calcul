<div class="c-xs-6 p">
    <div class="portion">
        <div class="row add-user">
            <div class="row">
                <h4> Add Users</h4>
                {!! Form::open(['action' =>'UsersController@addMembers' , 'class' => 'form']) !!}
                <div class="f-group text-field">
                    {!! Form::label('email' ,'Email',['class' => 'f-control']) !!}
                    {!! Form::email('email' ,old('email'),['class' => 'f-control']) !!}
                </div>
                <br>
                <div class="f-submit">
                    {!! Form::submit('Add',['class' => 'f-btn-submit']) !!}
                </div>
                {!! Form::close() !!}
            </div>
            <div class="row">
                <h4>Unverified Members ({{count($verifiedUsers)}})</h4>
                <table class="c-xs-12">
                    <thead class="c-xs-12">
                    <tr class="c-xs-12">
                        <th class="c-xs-6">Email</th>
                        <th class="c-xs-6">Sent At</th>
                    </tr>
                    </thead>
                    <tbody class="c-xs-12">
                    @foreach($verifiedUsers as $verifiedUser)
                        <tr class="c-xs-12">
                            <th class="c-xs-6"><span class="verifiedUser-email">{{$verifiedUser->email}}</span></th>
                            <th class="c-xs-6"><span class="verifiedUser-created-at">{{$verifiedUser->created_at}}</span></th>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>