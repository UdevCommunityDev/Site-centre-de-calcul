/**
 * Created by na3im on 10/08/2016.
 */
$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#uploaded_file').hide() ;
                $('#preview').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#uploaded_file").change(function(){
        readURL(this);
    });

    $('#preview').click(function(){
        $('#uploaded_file').click() ;
    });
});