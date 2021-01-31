window.addEventListener("scroll",function(){
    var x = pageYOffset
    if ( x > 2 ) {
        $("nav").addClass("header-shadow").css("border", "none")
    }
    else {
        $("nav").removeClass("header-shadow")
    }
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});