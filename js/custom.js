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

}); //end of document.ready()