$(document).ready(function(){
    $('.dropdown1').css('display', 'none');
    $('.dropdown2').css('display', 'none');
    $('.dropdown3').css('display', 'none');
    $('.dropdown4').css('display', 'none');
    $('.dropdown5').css('display', 'none');

	$('.nav1').hover(function(){
        $('.dropdown1').css('display', 'block');
        

	});
	$('.nav1').mouseleave(function(){
		$('.dropdown1').css('display', 'none');
	});

    $('.nav2').hover(function(){
        $('.dropdown2').css('display', 'block');

	});
	$('.nav2').mouseleave(function(){
		$('.dropdown2').css('display', 'none');
	});

    $('.nav3').hover(function(){
        $('.dropdown3').css('display', 'block');

	});
	$('.nav3').mouseleave(function(){
		$('.dropdown3').css('display', 'none');
	});

    $('.nav4').hover(function(){
        $('.dropdown4').css('display', 'block');

	});
	$('.nav4').mouseleave(function(){
		$('.dropdown4').css('display', 'none');
	});

    $('.nav5').hover(function(){
        $('.dropdown5').css('display', 'block');

	});
	$('.nav5').mouseleave(function(){
		$('.dropdown5').css('display', 'none');
	});
});
