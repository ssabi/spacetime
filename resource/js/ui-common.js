$(document).ready(function(){
    $(".form-box .inner .input-wrap input").on({
        focusin : function(){
            $(this).closest(".input-wrap").addClass("focus");
        },
        focusout : function(){
            var inputVal = $(this).val();

            if(inputVal.length == 0){
                $(this).closest(".input-wrap").removeClass("focus");
            }
        }
    });
});