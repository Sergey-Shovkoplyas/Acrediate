
$( document ).ready(function() {

	$('select.registration__item').styler();
	$('.jq-selectbox__select').on('click', function(){
		$(this).toggleClass('active');
	});
	$('.jq-selectbox__dropdown').on('click', function(){
		$(this).prev('.jq-selectbox__select').toggleClass('active');
	});

});