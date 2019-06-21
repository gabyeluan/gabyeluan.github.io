$(function(){
    $("#showInf").click(function(){
        $(".inf").slideToggle(500);
        setTimeout(
            function() 
            {
                $('html, body').stop().animate({
                    scrollTop: $(".inf").offset().top
                }, 600);
            }, 300);
        if ($("#showInf").text() == "Dar dinheiro para os Noivos =)"){
            $("#showInf").text ("Não dar dinheiro para os Noivos =´(");
        }
        else{
            $("#showInf").text ("Dar dinheiro para os Noivos =)");
        }
    });
});