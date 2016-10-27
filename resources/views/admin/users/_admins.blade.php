<div class="row">
    <div class="row">
        <h4 class="sub-title">Admins ({{$admins->count()}})</h4>
        <table class="c-xs-12">
            <tbody class="c-xs-12">
            @foreach($admins as $admin)
                <tr class="c-xs-12">
                    <th class="c-xs-3"><a href="" class="user_name">{{$admin->name}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_email">{{$admin->email}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_created-at">{{$admin->created_at}}</a></th>
                    <th class="c-xs-3">do something</th>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="row">
        <hr>
        {{$admins->links()}}
    </div>
</div>