$('.down-dir').click(function() {
  $('html, body').animate({
    scrollTop: $("#body-container").offset().top
  }, 1000)
});

$('#contact-btn').click(function() {
  $('html, body').animate({
    scrollTop: $("#contact-form").offset().top
  }, 1000)
});


$("#exit p").click(function(){
	$(".top-menu").fadeOut(2000);

});
