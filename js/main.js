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
		$header.toggleClass('headerbackground');
	});
	$hamburger.click(function(){
      $burger1.toggleClass('burger12');
      $burger2.toggleClass('burger22');
      $burger3.toggleClass('burger32');
      $burgerwrapper.slideToggle(500);
      $mobilemenu.fadeToggle(500);
      /*$mobileimages.animate({
      	'margin-bottom': '70px'
	  }, 1000);
    });
    $hamburger.click(function(){
    	$mobilemenulogos.animate({
      	opacity: '1'
	  }, 1500);*/
    });

	/*$(window).scroll(function(direction){
	    if ($(this).scrollTop() > 30) {
	       $('.scroll-down').fadeOut();
	    }
	    else {
	       $('.scroll-down').fadeIn();
	    }
	});*/
});
