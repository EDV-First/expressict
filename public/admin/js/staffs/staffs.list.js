$(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();   
    
    $("#list").addClass("nav-item-color").removeClass("nav-item");
    $("#staffs").addClass("nav-item-bgcolor").removeClass("nav-bg");


    $(document).ready(function(){
        $("#search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#content-user tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
      
    
});

