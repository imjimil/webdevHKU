$(document).ready(function() {
    $('#mycarousel').carousel({interval:2000});
    
    $("#carouselbutton").click(function(){
        if ($("#carouselbutton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselbutton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselbutton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselbutton").children("span").removeClass('fa-play');
            $("#carouselbutton").children("span").addClass('fa-pause');                    
        }
    });

    $("#reservationButton").click(function(){
        $("#reservationModal").modal('toggle');
    });

    $("#loginLink").click(function(){
        $("#loginModal").modal('toggle');
    });
    });