// JQuery will go here.
// This section fades in one page a fades to the other once the start button is clicked.


//When my document is ready fade in my body elements
$(document).ready(function(){
	
	$('body').css('display', 'none');
	$('body').fadeIn(1000);

	// When you click on the start button it this function will fade to the new page by 
	// creating the variable new location based on the a href attribute and calling 
	// the helper function "newpage", which will move you to the next page.
	$('.start-text').click(function(event) {
		event.preventDefault();
		newLocation = $('.start-text a').attr("href");
		$('body').fadeOut(1000, newpage);
	});

	function newpage() {
		window.location = newLocation;
	}
});
