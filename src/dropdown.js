$(function(){
    $('.dropdown1').hide();
    $('.nav1').hover(function(){
        $(this).parent().find('.dropdown1').slideDown();
        $(this).parent().hover(function(){

        }, function(){
            $(this).parent().find('.dropdown1').slideUp(900);
        }), function(){
            $(this).parent().hover('.nav1 a').css('color', 'silver');
        }, function(){
            $('.dropdown1').hover('.dropdown1').css('display', 'block');
        }
    });
});

$(function(){
    $('.dropdown2').hide();
    $('.nav2').hover(function(){
        $(this).parent().find('.dropdown2').slideDown();
        $(this).parent().hover(function(){
        }, function(){
            $(this).parent().find('.dropdown2').slideUp(900);
        })
    });
});

$(function(){
    $('.dropdown3').hide();
    $('.nav3').hover(function(){
        $(this).parent().find('.dropdown3').slideDown();
        $(this).parent().hover(function(){
        }, function(){
            $(this).parent().find('.dropdown3').slideUp(900);
        })
    });
});

$(function(){
    $('.dropdown4').hide();
    $('.nav4').hover(function(){
        $(this).parent().find('.dropdown4').slideDown();
        $(this).parent().hover(function(){
        }, function(){
            $(this).parent().find('.dropdown4').slideUp(900);
        })
    });
});


$(function(){
    $('.dropdown5').hide();
    $('.nav5').hover(function(){
        $(this).parent().find('.dropdown5').slideDown();
        $(this).parent().hover(function(){
        }, function(){
            $(this).parent().find('.dropdown5').slideUp(900);
        })
    });
});
