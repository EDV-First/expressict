window.addEventListener("scroll",function(){
    var x = pageYOffset
    if ( x > 2 ) {
        $("#header").addClass("header-shadow").css("border", "none")
    }
    else {
        $("#header").css("border-bottom", "1px solid #f5e3e085").removeClass("header-shadow")
    }
})