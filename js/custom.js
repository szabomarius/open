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
// text functions
var openSlider = $('.slick_slider');
var openHeadings = $('.headings_container');
// animates the text to fade in
function textFadeIn() {
	var current = $('current_heading');
	current.find("h2").show();
	current.find("h3").show();
	current.find("p").show();
}
// animates the text to fade out
function textFadeOut() {
	var current = $('current_heading');
	current.find("h2").animate({
		opacity: 0.25,
		left: "-=50"
	}, 1000);
	current.find("h3").hide();
	current.find("p").hide();
}
// applies the class current_heading to current headings in slide
function applyCurrent() {
	var current = openSlider.get(0).slick.currentSlide;
	openHeadings.removeClass("current_heading");
	openHeadings.eq(current).addClass("current_heading");
}

openSlider.slick({
	speed: 800,
	arrows: false,
	slide: 'section',
	dots: true,
	touchThreshold: 10,
	onAfterChange: function(){
		setTimeout(function(){
			applyCurrent();
		}, 1); //end of setTimeout()
	}, // end onAfterChange
	onBeforeChange: function(){
		textFadeOut();
	}
})
// change the position of the dots
$('.head_wrapper').append( $('.slick-dots') );

// Current index in the slider
//$('your-slider').get(0).slick.currentSlide

// ENABLE POINTER EVENTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PointerEventsPolyfill.initialize({});

}); //end of document.ready()