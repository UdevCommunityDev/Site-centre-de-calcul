$(document).ready(function () {
    var form = $('.form') ;
    var form_control = $('.f-control') ;
    var field =  $('input.f-control,textarea.f-control') ;
    for(var i = 0 ; i < field.length ; i++){
        if(field[i].value != ''){
            $(field[i]).parent('.f-group').addClass('is-focused') ;
        }
    }
    form_control.focus(function () {
        $(this).parent('.f-group').addClass('is-focused')  ;
    }) ;
    form_control.blur(function () {
        if($(this).val() == ''){
            $(this).parent('.f-group').removeClass('is-focused')  ;
        }
    });
}) ;
