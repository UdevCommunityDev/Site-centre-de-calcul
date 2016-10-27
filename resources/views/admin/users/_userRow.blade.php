
<tr class="c-xs-12">
    <td class="c-xs-3"><a href="{{route('user.profile',[$member->id])}}" class="user_name">{{$member->name}}</a></td>
    <td class="c-xs-3">
        @if($role == 'Owner')
            {{$member->email}}
        @else
            <a href="{{url('admin/emails/?from='.$member->email)}}" class="user_email">{{$member->email}}</a>
        @endif
    </td>
    <td class="c-xs-2"><a href="{{route('user.profile',[$member->id])}}" class="user_created-at">{{$member->created_at}}</a></td>
    <td class="c-xs-2">{{$role}}</td>
    <td class="c-xs-2">
        @if($role != 'Owner')
            {!! Form::open(['method' => 'DELETE' ,'action' =>['UsersController@destroy',$member->id] , 'class' => 'form']) !!}
                    <div class=" c-xs-12 f-submit f-danger">
                        {!! Form::submit('Delete',['class' => ' f-btn-submit']) !!}
                    </div>
            {!! Form::close() !!}


        @endif
    </td>
</tr>