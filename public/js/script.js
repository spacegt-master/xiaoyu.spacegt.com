$(document).ready(function() {

	new WOW({
		mobile: false,
		animateClass: 'animate__animated', 
	}).init();

	setTimeout(function() {
		$('.prelodaer-wrap').fadeOut('slow');
	}, 4500);

	//Ajax Form Send START
	$('#contact-form').on('submit', function() { 
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize(),
			success: function() {
				th.trigger('reset');
				$('.input-field').removeClass('is-active');
				$.magnificPopup.open({
					items: {
						src: '<div class="form-alert"><p>Your application has been successfully sent. <br> Expect a call!</p></div>',
						type: 'inline'
					}
				});
			},
			error: function() {
				th.trigger('reset');
				$('.input-field').removeClass('is-active');
				$.magnificPopup.open({
					items: {
						src: '<div class="form-alert"><p>An error occurred, please try again</p></div>',
						type: 'inline'
					}
				});
			}
		});
		return false;
	});
	//Ajax Form Send END

	// Banner START
	const swiperBanner = new Swiper('.swiper-banner', {
		speed: 800,
		spaceBetween: 100,
		effect: 'fade',
			fadeEffect: {
				crossFade: true
		},
		navigation: {
			nextEl: '.swiper-banner .swiper-button-next',
			prevEl: '.swiper-banner .swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-banner .swiper-scrollbar',
			enabled: true,
			draggable: true
		},
	});
	// Banner END
	

	// Menu START
	$('body').on('click', '.hamburger-button', function(e) {
		e.preventDefault();
		hamburgerButton = $('.hamburger-button');
		hamburgerMenuWrap = $('.menu-wrap');
		hamburgerMenuItem = $('.menu-nav');

		hamburgerMenuWrap.addClass('menu-active');
		hamburgerMenuItem.addClass('menu-item-active');
		menuOverlay = $('.menu-overlay');
		menuOverlay.addClass('menu-overlay__active');
	});

	$(document).on('mouseup', function(e) {
		e.preventDefault();
		menuClose = $('.menu-close');
		hamburgerMenuWrap = $('.menu-wrap');
		hamburgerMenuItem = $('.menu-nav');
		menuOverlay = $('.menu-overlay');

		if (!hamburgerMenuWrap.is(e.target) && hamburgerMenuWrap.has(e.target).length === 0) {
			hamburgerMenuWrap.removeClass('menu-active');
			hamburgerMenuItem.removeClass('menu-item-active');
			menuOverlay.removeClass('menu-overlay__active');
		}

		menuClose.on('mousedown', function() {
			hamburgerMenuWrap.removeClass('menu-active');
			hamburgerMenuItem.removeClass('menu-item-active');
			menuOverlay.removeClass('menu-overlay__active');
		});
	});
	// Menu END


	// Contact START
	$('.input-field input, textarea').on('input', function() {
		var inputValue = $(this).val();
		var inputpParent = $(this).parent('.input-field');
		if (inputValue.length > 0) {
		  inputpParent.addClass('is-active');
		} else {
		  inputpParent.removeClass('is-active');
		}
	  });
	// Contact END

	// Gallery Single page START
	$('.grid-single .grid-item img').parazoom({
		customCursorIcon: 'images/magnify.svg',
    	customCursorSize: '30px',
		transitionTime: '1s',
    	transitionTimeLeave: '1s'
	});

	var $grid = $('.grid-single').masonry({
		itemSelector: '.grid-single .grid-item',
		percentPosition: true,
		columnWidth: '.grid-single .grid-sizer'
	});
	$grid.imagesLoaded().progress( function() {
		$grid.masonry({
			gutter: 15
		});
	});

	$('.grid-single .grid-item a').magnificPopup({
		type:'image',
		removalDelay: 500,
		gallery: {
			enabled: true
		},
		callbacks: {
			beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	// Gallery Single page END

	// Album page START
	function albumMasonry() {
		var $gridAlbum = $('.grid-album').masonry({
			itemSelector: '.grid-album .grid-item',
			percentPosition: true,
			columnWidth: '.grid-album .grid-sizer'
		});
		$gridAlbum.imagesLoaded().progress( function() {
			$gridAlbum.masonry({
				gutter: 20
			});
		});
	}
	albumMasonry();

	var bLazy = new Blazy();
	$('.album-tab a').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$('.album-tab a').removeClass('is-active');
		$(this).addClass('is-active');

		$('.grid-album').removeClass('is-active');
		$(href).addClass('is-active');

		$(href).addClass('animate__animated animate__slideInUp');
		$('.grid-album.is-active:not(' + href + ')').removeClass('animate__animated animate__slideInUp');

		albumMasonry();
	});
	// Album page END


	// Settings START
	$('.settings-btn').on('click', function() {
		var settings = $('.settings-wrap');
		settings.toggleClass('is-active');
	});
	var savedColor = localStorage.getItem('boxColor');
	if (savedColor) {
		$(':root').css('--color-def', savedColor);
	}
	$('.settings-color-item').on('click', function() {
		var color = $(this).css('background-color');
		$('.settings-color-item').css('border-color', '#fff');
		$(this).css('border-color', color);
		$(':root').css('--color-def', color);
		localStorage.setItem('boxColor', color);
	});
	// Settings END
	
});