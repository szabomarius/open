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
var textHeading = $('.headings h2');
var textSubheading = $('.headings h3');
var textQuote = $('.headings p');

function textOut() {
	textHeading.html("Titlu 2");
	textSubheading.html("Subtitlu 2");
	textQuote.html("Paragraph lung si eficient in prezentare");
	console.log("textout worked");
}
function textFadeOut() {
	textHeading.hide();
	textSubheading.hide();
	textQuote.hide();
}
$('.slick_slider').slick({
	speed: 800,
	arrows: false,
	slide: 'section',
	dots: true,
	touchThreshold: 10,
	onAfterChange: function(){
		setTimeout(function(){

		}, 1); //end of setTimeout()
	}, // end onAfterChange
	onBeforeChange: function(){
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