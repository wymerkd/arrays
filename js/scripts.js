$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var favorite = [];
    favorite = document.getElementById("favoriteThing1").value;
    favorite = document.getElementById("favoriteThing2").value;
    favorite = document.getElementById("favoriteThing3").value;
    favorite = document.getElementById("favoriteThing4").value;
    console.log(favorite);
  });
});
