 $(function(){
    $(".top_button>a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});