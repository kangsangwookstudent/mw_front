//mouseover시 드롭다운 slideDown
$(function(){
    $('.dropdown1').hide();
    $('.nav1').hover(function(){
        $('.dropdown2').hide();
        $('.dropdown3').hide();
        $('.dropdown4').hide();
        $('.dropdown5').hide();
        $(this).parent().find('.dropdown1').stop().slideDown(700); 
    });
    $('.dropdown1').mouseleave(function(){
        $(this).parent().find('.dropdown1').stop().slideUp(900);
    });
});

$(function(){
    $('.dropdown2').hide();
    $('.nav2').hover(function(){
        $('.dropdown1').hide();
        $('.dropdown3').hide();
        $('.dropdown4').hide();
        $('.dropdown5').hide();
        $(this).parent().find('.dropdown2').stop().slideDown(700);
    });
    $('.dropdown2').mouseleave(function(){
        $(this).parent().find('.dropdown2').stop().slideUp(900);
    });
});

$(function(){
    $('.dropdown3').hide();
    $('.nav3').hover(function(){
        $('.dropdown1').hide();
        $('.dropdown2').hide();
        $('.dropdown4').hide();
        $('.dropdown5').hide();
        $(this).parent().find('.dropdown3').stop().slideDown(700);
    });
    $('.dropdown3').mouseleave(function(){
        $(this).parent().find('.dropdown3').stop().slideUp(900);
    });
});

$(function(){
    $('.dropdown4').hide();
    $('.nav4').hover(function(){
        $('.dropdown1').hide();
        $('.dropdown2').hide();
        $('.dropdown3').hide();
        $('.dropdown5').hide();
        $(this).parent().find('.dropdown4').stop().slideDown(700);
    });
    $('.dropdown4').mouseleave(function(){
        $(this).parent().find('.dropdown4').stop().slideUp(900);
    });
});


$(function(){
    $('.dropdown5').hide();
    $('.nav5').hover(function(){
        $('.dropdown1').hide();
        $('.dropdown2').hide();
        $('.dropdown3').hide();
        $('.dropdown4').hide();
        $(this).parent().find('.dropdown5').stop().slideDown(700);
    });
    $('.dropdown5').mouseleave(function(){
        $(this).parent().find('.dropdown5').stop().slideUp(900);
    });
});

$(function(){
    $('.login').hover(function(){
        $(this).parent().find('.dropdown5').stop().slideUp(900);
    })
})
