$(document).ready(function() {

    var mouseX;
    var mouseY;
  
    $(document).mousemove(function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      $('.cursor, .cursor2').css({
        'top': mouseY,
        'left': mouseX
      });
    });
  });