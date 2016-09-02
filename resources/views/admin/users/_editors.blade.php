<div class="row">
    <div class="row">
        <h4 class="sub-title">Editors ({{$editors->count()}})</h4>
        <table class="c-xs-12">
            <tbody class="c-xs-12">
            @foreach($editors as $editor)
                <tr class="c-xs-12">
                    <th class="c-xs-3"><a href="" class="user_name">{{$editor->name}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_email">{{$editor->email}}</a></th>
                    <th class="c-xs-3"><a href="" class="user_created-at">{{$editor->created_at}}</a></th>
                    <th class="c-xs-3">do something</th>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="row">
        <hr>
        {{$editors->links()}}
    </div>
</div>