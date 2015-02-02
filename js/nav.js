$(document).ready(function(){       
	var $appear = $('#appear');
	var	$disappear = $('#disappear');
	var when_top = $disappear.offset().top;

	$(window).scroll(function() {
		// $appear.toggleClass('invisible', $(window).scrollTop() < when_top, 400, 'linear');
		// $disappear.toggleClass('invisible', $(window).scrollTop() > when_top);
		if($(this).scrollTop() > $disappear.offset().top + 27) {
			$appear.fadeIn('100');
		}
		else {
			$appear.fadeOut('200');
		}
	});

	$.backstretch("../Naaleh-Website/img/background.png");

	$('.carousel').backstretch([
		"../Naaleh-Website/img/naaleh.jpg",
		"../Naaleh-Website/img/naaleh3.jpg", 
		"../Naaleh-Website/img/naaleh6.jpg", 
		"../Naaleh-Website/img/naaleh8.jpg", 
		"../Naaleh-Website/img/naaleh4.jpg", 
		"../Naaleh-Website/img/naaleh5.jpg", 
		"../Naaleh-Website/img/naaleh7.jpg" 
		], {duration: 3000, fade: 1000});
});