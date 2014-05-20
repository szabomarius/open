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
//variables
var openSlider = $('.slick_slider');
var openHeadings = $('.headings_container');
var slideinDistance = 100; // set your margins to this one
// animates the text to fade in
function textFadeIn() {
	var current = $('.current_heading');
	var currentH2 = current.find("h2");
	var currentH3 = current.find("h3");
	var currentP = current.find("p");
	currentH2.fadeIn({queue: false, duration: 300}).animate({marginTop: "+="+ slideinDistance + "px"}, 500);
	setTimeout(function(){
		currentH3.fadeIn({queue: false, duration: 300}).animate({marginLeft: "+="+ slideinDistance + "px"}, 300);
	}, 150);
	setTimeout(function(){
		currentP.fadeIn({queue: false, duration: 300}).animate({marginLeft: "-="+ slideinDistance + "px"}, 300);
	}, 200);

}
// animates the text to fade out
function textFadeOut() {
	var current = $('.current_heading');
	var currentH2 = current.find("h2");
	var currentH3 = current.find("h3");
	var currentP = current.find("p");

	currentH2.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+=260px", marginTop: "-=" + slideinDistance + "px"}, 0);
	setTimeout(function(){
		currentH3.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+="+ (260 - slideinDistance) + "px"}, 0);
	}, 150);
	setTimeout(function(){
	currentP.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+="+ (260 + slideinDistance) + "px"}, 0);
	}, 300);

	console.log("textFadeOut worked");
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
			textFadeIn();
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