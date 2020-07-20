$(document).ready(function(){

    $("body").removeClass('hide');
    $("body").removeClass('show');

    $("#button").click(function(){

        $(".overlay").removeClass('show');
        $(".overlay").addClass('hide');
        $("#c").addClass('zoom');
        setTimeout(function() { 
            $(".overlay").addClass('none');
            $(".overlay").removeClass('block');
        }, 1000);

        setTimeout(function() { 
            $(".title").removeClass('block');
            $(".title").addClass('show');
        }, 1000);

    })

    $(".back").click(function(){

        $(".overlay").removeClass('none');
        $(".title").removeClass('none');
        $(".title").removeClass('show');
        $("#c").removeClass('zoom');
        setTimeout(function() { 
            $(".title").addClass('block');
        }, 2000);

        $(".overlay").addClass('block');
        setTimeout(function() { 
            $(".overlay").addClass('show');
        }, 1000);

    })


    $(".retour").click(function(){

        setTimeout(function() { 
            $("body").addClass('hide');
        }, 0);
        setTimeout(function() { 
            $(location).attr('href',"index.html");
        }, 3000);
    })

    $(".choice").click(function(){

        setTimeout(function() { 
            $("body").addClass('hide');
        }, 0);
        setTimeout(function() { 
            $(location).attr('href',"menu.html");
        }, 3000);


    })

    $(".jouer").click(function(){

        $(".title").addClass('hide');
        $(".title").removeClass('show');
        setTimeout(function() { 
            $("body").addClass('hide');
        }, 2000);
        setTimeout(function() { 
            $(location).attr('href',"menu.html");
        }, 5000);


    })



    $(".noaudio").click(function() {
        document.getElementById("myaudio").muted = true;
        document.getElementById("valide").volume = 0;
    });
    $(".audio").click(function() {
        document.getElementById("myaudio").muted = false;
        document.getElementById("valide").volume = 0.005;
    });





    $("#ok").click(function() {
        $(this).siblings().removeClass('blocked');
        $(this).siblings().addClass('hide');
        setTimeout(function() { 
            $('.game').addClass('hide');
        }, 1000);
        setTimeout(function() { 
            $(location).attr('href',"memory1.html");
        }, 3000);
    });

    $(".play, #ok, .retour").click(function() {
        document.getElementById("valide").play();
    });


})

