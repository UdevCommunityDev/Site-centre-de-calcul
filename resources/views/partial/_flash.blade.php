@if (session()->has('flash_notification.message'))
   <div id="alert-container" class="row alert-container">
       <div class="uci-alert {{ session('flash_notification.level') }}">
           {!! session('flash_notification.message') !!}
       </div>
   </div>
@endif