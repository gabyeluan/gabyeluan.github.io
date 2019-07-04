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

// Toggle Show Modal
function showModal(){
    $('#modal').fadeIn(300);
    $('#modal').css('display', 'flex');
}

$(function(){
    $('#modal').on('click', function(e){
        if (e.target !== this){
            return;
        }else{
            closeModal();
        }
    });

    $(document).keyup(function(e){
        if (e.key === "Escape"){
            closeModal();
        }
    });

    function closeModal(){
        $('#modal').fadeOut(300);
    }
});


