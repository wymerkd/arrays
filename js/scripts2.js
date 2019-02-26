$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var items = [];
    favorite = document.getElementById('favoriteThing1').value;
    items.push(favorite);
    favorite = document.getElementById("favoriteThing2").value;
    items.push(favorite);
    favorite = document.getElementById("favoriteThing3").value;
    items.push(favorite);
    favorite = document.getElementById("favoriteThing4").value;
    items.push(favorite);
    console.log(items);
     $("#output").text(items);
  });
});
