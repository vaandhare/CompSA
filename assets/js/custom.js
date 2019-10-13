jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. HEADER CONTENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.header-slide').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:false, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'span',
		fade: true,
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 700) {
        $('.main-navbar').addClass('navbar-fixed-top');
        $('.logo').addClass('logo-compressed');
        $('.main-nav li a').addClass('less-padding');
      } else {
	        $('.main-navbar').removeClass('navbar-fixed-top');
	        $('.logo').removeClass('logo-compressed');
	        $('.main-nav li a').removeClass('less-padding');
      }
	});


	/* ----------------------------------------------------------- */
	/*  4. TESTIMONIAL SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:true, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'div',		
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  4. TEAM SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.team-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:true, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'div',		
		cssEase: 'linear'
	});


	/* ----------------------------------------------------------- */
	/*  6. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  jQuery(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  jQuery('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".main-nav"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=#"+id+"]").parent().addClass("active");
		   }           
		})

	/* ----------------------------------------------------------- */
	/*  8. MIXIT FILTER ( FOR PORTFOLIO ) 
	/* ----------------------------------------------------------- */ 

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*	  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/*	-----------------------------------------------------------  */
	    
		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});	 

	/* ----------------------------------------------------------- 
	/*  10. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

	jQuery('.navbar-nav').on('click', 'li a', function() {
	  $('.in').collapse('hide');
	});

	/* ----------------------------------------------------------- */
	/*  11. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      jQuery('.loader').fadeOut(); // will first fade out the loading animation
      jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      jQuery('body').delay(100).css({'overflow':'visible'});
    })

	/* ----------------------------------------------------------- */
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

});