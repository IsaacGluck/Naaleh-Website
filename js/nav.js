var $to_stick = $('#toStick'),
	when_top = $to_stick.offset().top;

$(window).scroll(function() {
	$to_stick.toggleClass('sticky', $(window).scrollTop() > when_top,);
});