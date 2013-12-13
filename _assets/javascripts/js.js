//= require modernizr/modernizr
//= require libs/jquery-2.0.3
//= require libs/jquery.jsonp-2.4.0
//= require libs/jquery.visible
//= require foundation/foundation.min
//= require foundation/foundation/foundation.topbar

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function(){
	$('.js-plus-temp').on('click', function(e){
		e.preventDefault();
		console.log('click');
		var params = { temp: 1 };
		$.post( "http://termo.meteor.com/termo-up", params)
		  .done(function( data ) {
		  	console.log(data);
		  });
	});
	$('.js-minus-temp').on('click', function(e){
		e.preventDefault();
		console.log('click');
		var params = { temp: 1 };
		$.post( "http://termo.meteor.com/termo-down", params)
		  .done(function( data ) {
		  	console.log(data);
		  });
	});
});