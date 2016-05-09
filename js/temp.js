  
$(document).ready(function(){
    $("#hide").click(function(){
        $("#para1,#para2,#para3").hide();

    $("#show").click(function(){
        $("#para1,#para2,#para3").show();
    });
});
});

/*$(document).ready(function(){
    $("#para2").mouseenter(function(){
        alert("Emergency Service Available; 24-7!");
    });
});*/

$(document).ready(function(){
    $("button").click(function(){
        $(".panel-footer").toggle();
    });
});



$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).addClass("opa");
    });
    $("img").mouseleave(function(){
        $(this).removeClass("opa");
});

});

$(document).ready(function(){
    $(":checkbox").wrap("<span style='background-color:blue'>");
});

$(document).ready(function(){
    $(".jumbotron").animate({fontSize: '40px'}, "slow");
});

/*$(document).ready(function() {

            $("#hide").click(function(){
               $(".target").hide( "explode", {pieces: 16 }, 2000 );
            });

            $("#show").click(function(){
               $(".target").show( "explode", {pieces: 16}, 2000 );
            });
				
         });*/
			
      
