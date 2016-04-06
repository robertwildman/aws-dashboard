$(document).ready(function() {



	for (i = 0; i < 10; i++) {
		$template = $('.template').clone();
	$template.removeClass('template');
		console.log(i);
		$template.find('.panel-heading').text(i);
		$('#panel-holder').append($template);
	}

});
