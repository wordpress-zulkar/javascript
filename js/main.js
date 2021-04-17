$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: false,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
//         video: {
// 			tError: 'https://clickup.com/blog/crm-in-clickup/?utm_source=google&utm_medium=cpc&utm_term=&targetid=aud-929687135699&utm_campaign=blog-seo-generic-retargeting&utm_content=&gclid=CjwKCAjwvMqDBhB8EiwA2iSmPCPRwIY1j31JsXhzcF7V1Z2QQ9JnDBB9NxQZyhkxpRmt0mCSFmBduRoCb2MQAvD_BwE',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
// });

// wow = new WOW(
//     {
//     boxClass:     'wow',      // default
//     animateClass: 'animated', // default
//     offset:       0,          // default
//     mobile:       true,       // default
//     live:         true        // default
//   }
//   )
  
