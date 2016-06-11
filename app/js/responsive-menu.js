$( document ).ready(function( $ ) {
    var body = $('body') ;
    $('#header--trigger').click(function(){
        body.toggleClass("with-slid") ;
    });
    $('#site-cache').click(function(){
        body.removeClass("with-slid") ;
    });
});