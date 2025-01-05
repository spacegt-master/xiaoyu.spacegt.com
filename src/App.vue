<template>
	<div class="menu-overlay"> </div>
	<main class="main">
		<div class="settings-wrap">
			<div class="settings-btn">
				<i class="fa fa-cog" aria-hidden="true"></i>
			</div>
			<div class="settings-content">
				<div class="settings-title">Color:</div>
				<div class="settings-color-wrap">
					<span class="settings-color-item color-1"></span>
					<span class="settings-color-item color-2"></span>
					<span class="settings-color-item color-3"></span>
					<span class="settings-color-item color-4"></span>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</main>
</template>
<script setup>
import {
	onMounted,
	watch
} from 'vue'
import {
	useRoute
} from 'vue-router'
const route = useRoute()

watch(() => route.path, (value) => {
	const menuOverlay = $('.menu-overlay');
	menuOverlay.removeClass('menu-overlay__active');
})

onMounted(() => {

	new WOW({
		mobile: false,
		animateClass: 'animate__animated',
	}).init();

	setTimeout(function () {
		$('.prelodaer-wrap').fadeOut('slow');
	}, 4500);

	//Ajax Form Send START
	$('#contact-form').on('submit', function () {
		var th = $(this);
		return false;
	});
	//Ajax Form Send END

	// Menu START
	$('body').on('click', '.hamburger-button', function (e) {
		e.preventDefault();
		const hamburgerButton = $('.hamburger-button');
		const hamburgerMenuWrap = $('.menu-wrap');
		const hamburgerMenuItem = $('.menu-nav');

		hamburgerMenuWrap.addClass('menu-active');
		hamburgerMenuItem.addClass('menu-item-active');
		const menuOverlay = $('.menu-overlay');
		menuOverlay.addClass('menu-overlay__active');
	});

	$(document).on('mouseup', function (e) {
		e.preventDefault();
		const menuClose = $('.menu-close');
		const hamburgerMenuWrap = $('.menu-wrap');
		const hamburgerMenuItem = $('.menu-nav');
		const menuOverlay = $('.menu-overlay');

		if (!hamburgerMenuWrap.is(e.target) && hamburgerMenuWrap.has(e.target).length ===
			0) {
			hamburgerMenuWrap.removeClass('menu-active');
			hamburgerMenuItem.removeClass('menu-item-active');
			menuOverlay.removeClass('menu-overlay__active');
		}

		menuClose.on('mousedown', function () {
			hamburgerMenuWrap.removeClass('menu-active');
			hamburgerMenuItem.removeClass('menu-item-active');
			menuOverlay.removeClass('menu-overlay__active');
		});
	});
	// Menu END


	// Contact START
	$('.input-field input, textarea').on('input', function () {
		var inputValue = $(this).val();
		var inputpParent = $(this).parent('.input-field');
		if (inputValue.length > 0) {
			inputpParent.addClass('is-active');
		} else {
			inputpParent.removeClass('is-active');
		}
	});
	// Contact END

	// Settings START
	$('.settings-btn').on('click', function () {
		var settings = $('.settings-wrap');
		settings.toggleClass('is-active');
	});
	var savedColor = localStorage.getItem('boxColor');
	if (savedColor) {
		$(':root').css('--color-def', savedColor);
	}
	$('.settings-color-item').on('click', function () {
		var color = $(this).css('background-color');
		$('.settings-color-item').css('border-color', '#fff');
		$(this).css('border-color', color);
		$(':root').css('--color-def', color);
		localStorage.setItem('boxColor', color);
	});
	// Settings END

})
</script>
<style>
@import url(glightbox/dist/css/glightbox.min.css);
@import url(element-plus/dist/index.css);

body {
	height: 100%;
	width: 100%;
}
</style>