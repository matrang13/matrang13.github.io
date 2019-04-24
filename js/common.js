$(function() {

	$(".main-nav__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav: true,
	    margin:30,
	    // autoplay: true,
	    // autoplayTimeout: 10000,
	    responsiveClass:true,
	    responsive:{

	        0:{
	            items:1,
	            nav:false
	        },
	        768:{
	            items:1,
	            nav:false
	        },
	        993:{
	            items:2,
	            nav:false
	        },
	        1200:{
	            items:3,
	        }
	    }
	})

	$('#aniimated-thumbnials').lightGallery({
	    thumbnail:true,
	    animateThumb:true,
	}); 

	$("#privacy-modal").iziModal({
		headerColor: '#3C3115',
		width: 800,
	});

	$("#callback-modal").iziModal({
		headerColor: '#D11D1D',
		width: 370,
	});

	$("#tutor-modal").iziModal({
		headerColor: '#3E8DBC',
		width: 370,
	});



});

// document.addEventListener(
//     "DOMContentLoaded", () => {
//         new Mmenu( "#my-menu", {
//            "extensions": [
//               // "position-right",
//               "theme-dark"
//            ]
//         }, {
//         	clone: true
//         });
//     }
//  );

new Mmenu(
	document.querySelector('#my-menu'),
	{
		extensions	: [ 'theme-dark', 'shadow-page' ],
		setSelected	: true,
		counters	: true,
		searchfield : {
			
		},
		
	}, {
    	clone: true
    }
);

document.addEventListener( 'click', ( evnt ) => {
	let anchor = evnt.target.closest( 'a[href^="#/"]' );
	if ( anchor ) {
		alert('Thank you for clicking, but that\'s a demo link.');
		evnt.preventDefault();
	}
});



