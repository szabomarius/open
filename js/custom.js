// custom js
$(document).ready(function() {

// Make buttons active or not
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
	speed: 400,
	arrows: false,
	slide: 'section',
	touchThreshold: 10
})

// ENABLE POINTER EVENTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PointerEventsPolyfill.initialize({});

}); //end of document.ready()