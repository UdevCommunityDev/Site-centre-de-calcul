@if($errors->any())
    <ul class="messages error">
        @foreach($errors->all() as $k => $v)
            <li>{{$v}}</li>
        @endforeach
    </ul>
@endif