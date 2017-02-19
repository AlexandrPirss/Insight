$(".toggle__menu").click(function() {
	$(this).toggleClass('on');
	$(".main__menu").slideToggle();
});