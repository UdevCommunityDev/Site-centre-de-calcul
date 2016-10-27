/**
 * Created by na3im on 09/08/2016.
 */
/**
 * select2 plugin init
 */

$(document).ready(function () {
    $('.select').select2()   ;


    /**
     * tinymce plugin init
     */
    tinymce.init({
        selector: '#content',
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste textcolor colorpicker textpattern"
        ],
        height : 690 ,
        toolbar1: "newdocument | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        paste_as_text: true
    });

}) ;