
$(document).ready(function(){
    var compteurClic = 0;
    $(".card").click(function(){
            compteurClic++;
            $("span").text(compteurClic); 
    });

  });