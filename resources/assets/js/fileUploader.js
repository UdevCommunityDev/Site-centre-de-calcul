/**
 * Created by na3im on 10/08/2016.
 */
$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = $('#uploadedFile_preview') ;
                img.show().attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    var img  =  $('#uploadedFile_preview') ;

    var old_img  =  $('#uploadedFile_preview_old') ;

    $.get(img.attr('src')).done(console.log('exist')) ;


    $("#uploadedFile_input").change(function(){
        old_img.hide() ;
        readURL(this);
    });

    $('#uploadedFile_preview_container').click(function(){
        $('#uploadedFile_input').click() ;
    });

});