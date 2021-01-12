$(document).ready(function(){

  document.getElementById('customControlAutosizing').onclick = function(e){
    var ids = document.querySelectorAll('[id]')
    if (this.checked){
      Array.prototype.forEach.call( ids, function( el, i ) {
        if (el.id.indexOf("5f") !== -1) {
          document.getElementById(el.id).checked = true
        }
      });
    }
    else{
      Array.prototype.forEach.call( ids, function( el, i ) {
        if (el.id.indexOf("5f") !== -1) {
          document.getElementById(el.id).checked = false
        }
      });
    }
  };

  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#content-user tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  

  $("#users").addClass("nav-item-bgcolor").removeClass("nav-bg");
});
