// custom js
$(document).ready(function() {

// MAKE BUTTONS ACTIVE OR NOT LOL
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var nav_buttons = $('.main_nav a');
var nav_circles = $('.nav_btns li');

nav_buttons.click(function() {
	nav_buttons.removeClass("active");
	$(this).addClass("active");
})
nav_circles.click(function() {
	nav_circles.removeClass("active");
	$(this).addClass("active");
})

// SLIDER FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.slick_slider').slick({
	speed: 800,
	arrows: false,
	slide: 'section',
	dots: true,
	touchThreshold: 10
})
// change the position of the dots
$('.head_wrapper').append( $('.slick-dots') );

// Current index in the slider
//$('your-slider').get(0).slick.currentSlide

// ENABLE POINTER EVENTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PointerEventsPolyfill.initialize({});

}); //end of document.ready()