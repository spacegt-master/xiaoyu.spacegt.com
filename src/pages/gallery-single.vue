<template>
	<section class="s-gallery">

		<sidebar-vue></sidebar-vue>

		<div class="content-page gallery-wrap">
			<div class="content-inner">
				<div class="title-wrapper text-center">
					<h2 class="title">作品集 - 画廊</h2>
					<div class="subtitle">
						<p>我的作品集是一场内心的视觉盛宴。我通过色彩的碰撞和线条的交织，探索潜意识的深处，表达情感的流动和宇宙的奥秘。每一幅画作都是一次心灵的对话，我希望观众能够在作品中找到属于自己的情感共鸣。</p>
					</div>
				</div>
				<div class="grid-single">
					<div class="grid-sizer">
					</div>
					<div class="grid-item" v-for="(img,index) in images" :key="img">
						<a :href="'/images/works/'+img" data-effect="mfp-zoom-in">
							<img class="b-lazy" :data-src="'/images/works/thumb/'+img" :src="'/images/works/thumb/'+img" :alt="index+1">
						</a>
					</div>
				</div>
				<div class="grid-nav-wrap">
					<a href="javascript:void(0)" class="grid-nav-item">
						<span class="mdi mdi-arrow-left"></span>
						<span>上一个专辑</span>
					</a>
					<a href="javascript:void(0)" class="grid-nav-item">
						<span>下一个专辑</span>
						<span class="mdi mdi-arrow-right"></span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import sidebarVue from '../components/sidebar.vue'
	import {
		reactive,
		onMounted
	} from 'vue'
	const images = reactive([
		'1-tic.jpg',
		'1-tic.png',
		'2-tic.png',
		'3-tic.png',
		'4-tic.png',
		'8-tic.png',
		'9-tic.png',
		'10-1-tic.jpg',
		'10-2-tic.jpg',
		'10-3-tic.jpg',
		'10-4-tic.jpg',
		'10-6-tic.jpg',
		'10-7-tic.jpg',
		'10-8-tic.jpg',
		'10-9-tic.jpg',
		'10-10-tic.jpg',
		'5-tic.png',
		'6-tic.png',
		'7-tic.png',
		'37-tic.jpg',
		'11-tic.jpg',
		'12-tic.jpg',
		'13-tic.jpg',
		'14-tic.jpg',
		'15-tic.jpg',
		'16-tic.jpg',
		'17-tic.jpg',
		'18-tic.jpg',
		'19-tic.jpg',
		'10-tic.jpg',
		'11-tic.jpg',
		'12-tic.jpg',
		'13-tic.jpg',
		'14-tic.jpg',
		'15-tic.jpg',
		'16-tic.jpg',
		'17-tic.jpg',
		'18-tic.jpg',
		'19-tic.jpg',
		'20-tic.jpg',
		'21-tic.jpg',
		'22-tic.jpg',
		'23-tic.jpg',
		'24-tic.jpg',
		'25-tic.jpg',
		'26-tic.jpg',
		'27-tic.jpg',
		'28-tic.jpg',
		'29-tic.jpg',
		'30-tic.jpg',
		'31-tic.jpg',
		'32-tic.jpg',
		'33-tic.jpg',
		'34-tic.jpg',
		'35-tic.jpg',
		'36-tic.jpg'
	])

	onMounted(() => {
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
		$grid.imagesLoaded().progress(function() {
			$grid.masonry({
				gutter: 15
			});
		});

		$('.grid-single .grid-item a').magnificPopup({
			type: 'image',
			removalDelay: 500,
			gallery: {
				enabled: true
			},
			callbacks: {
				beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure',
						'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});
		// Gallery Single page END
	})
</script>

<style>
</style>