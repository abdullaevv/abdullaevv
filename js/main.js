$(function () {
	$('.logo').click(function(){
		$('.triangles').css('width', '300px');
	});

/*	$('.offer-content button').click(function(){
		$('.phone').css('font-size', '20px');
	});*/

	$('.menu li a').click(function(){
		$(this).toggleClass('active'); //this = .menu li a
	});
});

/*$('.scroll-down').click( {
	$('body').animate({scrollTap(5)}, 1000);
});*/

$('body').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).width();

	$('.poly1').css(
		'transform',
		'translate(' + x * 100 + 'px, -' + y * 100 + 'px)'
	);

	$('.poly2').css(
		'transform',
		'translate(-' + x * 90 + 'px, ' + y * 90 + 'px)'
	);

	$('.poly3').css(
		'transform',
		'translate(' + x * 120 + 'px, ' + y * 120 + 'px)'
	);
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 4);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();

(function() {
  'use strict__2';

  var btnScrollDown__2 = document.querySelector('#scroll_down__2');

  function scrollDown__2() {
    var windowCoords__2 = document.documentElement.clientHeight;
    (function scroll__2() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 5);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown__2.addEventListener('click', scrollDown);
})();

