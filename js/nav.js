var $to_stick = $('#toStick'),
	when_top = $to_stick.offset().top;

$(window).scroll(function() {
	$to_stick.toggleClass('sticky', $(window).scrollTop() > when_top);
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