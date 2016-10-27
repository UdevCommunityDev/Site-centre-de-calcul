<div class="row">
    <div class="row">
        <h4 class="sub-title">Members ({{$members->count()}})</h4>
        <table class="c-xs-12">
            <tbody class="c-xs-12">
            @foreach($members as $member)
                <tr class="c-xs-12">
                    <th class="c-xs-3"><a href="" class="user_name">{{$member->name}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_email">{{$member->email}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_created-at">{{$member->created_at}}</a></th>
                    <th class="c-xs-3">do something</th>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="row">
        <hr>
        {{$members->links()}}
    </div>
</div>