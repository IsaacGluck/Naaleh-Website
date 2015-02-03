$('.about').hover(function() {
    $('.about').text('בִּדְבַר');
});

$('.about').mouseleave(function() {
    $('.about').text('About');
});

$('.parents').hover(function() {
    $(this).text('הורים');
});

$('.parents').mouseleave(function() {
    $(this).text('parents');
});

$('.campers').hover(function() {
    $(this).text('חניכים');
});

$('.campers').mouseleave(function() {
    $(this).text('campers');
});

$('.staff').hover(function() {
    $(this).text('צוות');
});

$('.staff').mouseleave(function() {
    $(this).text('staff');
});

$('.contact').hover(function() {
    $(this).text('קשר');
});

$('.contact').mouseleave(function() {
    $(this).text('contact');
});

$('.friends').hover(function() {
    $(this).text('חברים');
});

$('.friends').mouseleave(function() {
    $(this).text('friends');
});

$('.year_round').hover(function() {
    $(this).text('השנה');
});

$('.year_round').mouseleave(function() {
    $(this).text('all year');
});

$(document).ready(function(){
	var $appear = $('#appear');
	var	$disappear = $('#disappear');
	var when_top = $disappear.offset().top;

	$(window).scroll(function() {
		// $appear.toggleClass('invisible', $(window).scrollTop() < when_top, 400, 'linear');
		// $disappear.toggleClass('invisible', $(window).scrollTop() > when_top);
		if($(this).scrollTop() > $disappear.offset().top + 32) {
			$appear.fadeIn(30);
		}
		else {
			$appear.fadeOut(150);
		}
	});

	// $.backstretch("../Naaleh-Website/img/background.png");

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
