function saut() {
$('#img').animate({marginBottom : '+=300px'},200);
}

function a(){
  alert ('coucou');
}
$(document).keydown(function(e){
  if(e.KeyCode == 38){
    $("#bird").animate({marginBottom : "+=250px"},300);
  }
});
$(document).keydown(function(e){
  if(e.keyCode == 37){
    $("#bird").animate({marginRight : "+=250px"},300);
  }
});
$(document).keydown(function(e){
  if(e.keyCode == 39){
    $("#bird").animate({marginLeft : "+=250px"},300);
  }
});
$(document).keydown(function(e){
  if(e.keyCode == 40){
    $("#bird").animate({marginTop : "+=250px"},300);
  }
});
