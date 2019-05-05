$(document).ready(function(){

	var $burger1 = $('.burger1');
    var $burger12 = $('.burger12');
    var $burger2 = $('.burger2');
    var $burger22 = $('.burger22');
    var $burger3 = $('.burger3');
    var $burger32 = $('.burger32');
    var $burgerwrapper = $('.burgerwrapper');
	var $hamburger = $('.hamburger');
	var $mobileimages = $('.mobileimages');
	var $mobilemenu = $('.mobilemenu');
	var $mobilemenucontainer = $('.mobilemenucontainer');
	var $mobilemenulogos = $('.mobilemenulogos');
	var $motownnation = $('#motownnation');
	var $theboybandnight = $('#theboybandnight');
	var $thecountrynight = $('#thecountrynight');
	var $thehairbandnight = $('#thehairbandnight');
	var $theronburgundys = $('#theronburgundys');
	var $threekg = $('#threekg');
	var $menu = $('.menu');
	var $header = $('.header');


	$menu.click(function(){
		$header.fadeToggle(1000);
	});
	$theboybandnight.waypoint(function(){
		$header.toggleClass('tbbnbackground');
	});
	$theronburgundys.waypoint(function(){
		$header.toggleClass('trbbackground');
	});
	$thecountrynight.waypoint(function(){
		$header.toggleClass('tcnbackground');
	});
	$motownnation.waypoint(function(){
		$header.toggleClass('mtnbackground');
	});
	$thehairbandnight.waypoint(function(){
		$header.toggleClass('thbnbackground');
	});
	$threekg.waypoint(function(){
		$header.toggleClass('hback');
	});
	$hamburger.click(function(){
      $burger1.toggleClass('burger12');
      $burger2.toggleClass('burger22');
      $burger3.toggleClass('burger32');
      $burgerwrapper.slideToggle(500);
      $mobilemenu.fadeToggle(500);
    });

	$(window).scroll(function(direction){
	    if ($(this).scrollTop() > 110) {
	       $('.arrowtotop').addClass('arrowon');
	    }
	    else {
	       $('.arrowtotop').removeClass('arrowon');
	    }
	});
});

$(document).ready(function(){
	$('#pcolumn1').slick({
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 2300,
	  infinite: true,
	});
	$('#pcolumn2').slick({
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 3400,
	  infinite: true,
	});
	$('#pcolumn3').slick({
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 1700,
	  infinite: true,
	});
	$('#pcolumn4').slick({
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 1700,
	  infinite: true,
	});
});
