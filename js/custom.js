// custom js
$(document).ready(function() {

// MODERNIZRD DETECTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// detects if the browser has css transitions and applies a class
var detected = Modernizr.csstransitions;
if (detected) {
	$('.headings_container').addClass("headings_transition_detected");	
}
console.log(detected);


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
var eachHeading = $('.headings_container h2, .headings_container h3, .headings_container p');
var slideinDistance = 100; // set your margins to this one
// animates the text to fade in
function textFadeIn() {
	//variables
	var current = $('.current_heading');
	var currentH2 = current.find("h2");
	var currentH3 = current.find("h3");
	var currentP = current.find("p");
	// if transitions are not detected, animate via jquery
	if (!detected) {
		currentH2.fadeIn({queue: false, duration: 300}).animate({marginTop: "+="+ slideinDistance + "px"}, 500);
		setTimeout(function(){
			currentH3.fadeIn({queue: false, duration: 300}).animate({marginLeft: "+="+ slideinDistance + "px"}, 300);
		}, 150);
		setTimeout(function(){
			currentP.fadeIn({queue: false, duration: 300}).animate({marginLeft: "-="+ slideinDistance + "px"}, 300);
		}, 200);
		console.log("transitions have not been detected, switching to jquery animate");
	}
	// if transitions are detected, proceed to add classes to fadein things.
	else {
		currentH2.removeClass("fadeOut default notrans");
		currentH3.removeClass("fadeOut default notrans");
		currentP.removeClass("fadeOut default notrans");

		currentH2.addClass("fadeIn");
		currentH3.addClass("fadeIn");
		currentP.addClass("fadeIn");
	}
}
// animates the text to fade out
function textFadeOut() {
	//variables
	var current = $('.current_heading');
	var currentH2 = current.find("h2");
	var currentH3 = current.find("h3");
	var currentP = current.find("p");
	if (!detected) {
		currentH2.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+=260px", marginTop: "-=" + slideinDistance + "px"}, 0);
		setTimeout(function(){
			currentH3.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+="+ (260 - slideinDistance) + "px"}, 0);
		}, 150);
		setTimeout(function(){
		currentP.fadeOut({queue: false, duration: 600}).animate({marginLeft: "-=260px"}, 600).animate({marginLeft: "+="+ (260 + slideinDistance) + "px"}, 0);
		}, 300);
	}
	else {
		currentH2.addClass("fadeOut");
		currentH3.addClass("fadeOut");
		currentP.addClass("fadeOut");
		setTimeout(function(){
			currentH2.addClass("notrans default");
			currentH3.addClass("notrans default");
			currentP.addClass("notrans default");
		}, 410);
	}
}
// applies the class current_heading to current headings in slide
function applyCurrent() {
	var current = openSlider.get(0).slick.currentSlide; //current index in the slider
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


// SMOOTH SCROLLING TO ANCHOR TAGS BASED ON NAME
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){
	var root = $('html, body');
	$('a').click(function(){
	    root.animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 900);
    return false;
	});
})();

// ENABLE POINTER EVENTS FOR OLDER BROWSERS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PointerEventsPolyfill.initialize({});

// Find out the browser window dimensions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

$( window ).resize(function() {
	var viewportSize = viewport();
	console.log(viewportSize);
});

}); //end of document.ready()