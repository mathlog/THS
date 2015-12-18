jQuery(document).ready(function() {

  jQuery('.homeslideshow').bxSlider({
    displaySlideQty: 1,
    moveSlideQty: 1,
	auto: true,
	childSelector : '.slideshow-item',
	mode: 'fade',
	speed: 500,
	pause: 6000,
	pager: false,
	touchEnabled : true
  });
});