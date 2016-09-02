@extends('outputs._adminPageOutPut')

@section('page')
    Users
@stop

@section('body')
    <section class="section model-lists-section">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="portion">
                        <div class="row">
                            <h2 class="model-title">Users</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                        @if($user->hasRole('Owner'))
                            @include('admin.users._addMembers')
                        @endif
                        @if($user->hasRole('Admin'))
                            @include('admin.users._attachRoles')
                        @endif
                   </div>
                <div class="row">
                    <div class="portion">
                        <div class="row users-table">
                            <table class="c-xs-12">
                                <thead class="c-xs-12">
                                <tr class="c-xs-12">
                                    <th class="c-xs-3">Name</th>
                                    <th class="c-xs-3">Email</th>
                                    <th class="c-xs-2">Sign Up At</th>
                                    <th class="c-xs-2">Role</th>
                                    <th class="c-xs-2">Action</th>
                                </tr>
                                </thead>
                                <tbody class="c-xs-12">
                                    @foreach($members as $member)
                                        @if($member->roles()->count() == 4)
                                            @include('admin.users._userRow',['role' => 'Owner'])
                                        @elseif($member->roles()->count() == 3)
                                            @include('admin.users._userRow',['role' => 'Admin'])
                                        @elseif($member->roles()->count() == 2)
                                            @include('admin.users._userRow',['role' => 'Editor'])
                                        @elseif($member->roles()->count() == 1)
                                            @include('admin.users._userRow',['role' => 'Member'])
                                        @endif
                                    @endforeach
                                </tbody>
                            </table>

                            {{--@include('admin.users._admins')
                            @include('admin.users._editors')
                            @include('admin.users._members')--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop