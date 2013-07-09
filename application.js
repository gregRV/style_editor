$(document).ready(function(){
	$('#style_editor').on('submit', function(e){
		e.preventDefault();

		var selector = $('input:first-child').val();
		var property = $('input:nth-child(2)').val();
		var value = $('input:nth-child(3)').val();

		$(''+selector+'').css(''+property+'',''+value+'');		
	});
});