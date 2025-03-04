<template>
	<section class="s-gallery">

		<sidebar-vue></sidebar-vue>

		<div class="content-page gallery-wrap">
			<div class="content-inner">
				<div class="title-wrapper text-center">
					<h2 class="title">作品集 - 画廊</h2>
					<div class="subtitle">
						<p>我的作品集是一场内心的视觉盛宴。我通过色彩的碰撞和线条的交织，探索潜意识的深处，表达情感的流动和宇宙的奥秘。每一幅画作都是一次心灵的对话，我希望观众能够在作品中找到属于自己的情感共鸣。
						</p>
					</div>
				</div>
				<h2 style="padding: 40px 0 30px 0; font-weight: 500;">最新上传</h2>
				<div class="grid-single">
					<div class="grid-sizer">
					</div>
					<div class="grid-item" v-for="(item, index) in news" :key="item.img">
						<a :href="'/images/works/' + item.img" data-effect="mfp-zoom-in">
							<img class="b-lazy" :data-src="'/images/works/thumb/' + item.img"
								:src="'/images/works/thumb/' + item.img" :alt="index + 1">
						</a>
					</div>
				</div>
				<h2 style="padding: 40px 0 30px 0; font-weight: 500;">三维模型</h2>
				<div class="grid-single">
					<div class="grid-sizer">
					</div>
					<div class="grid-item" v-for="(item, index) in model" :key="item.img">
						<a :href="'/images/works/' + item.img" data-effect="mfp-zoom-in">
							<img class="b-lazy" :data-src="'/images/works/thumb/' + item.img"
								:src="'/images/works/thumb/' + item.img" :alt="index + 1">
						</a>
					</div>
				</div>
				<h2 style="padding: 40px 0 30px 0; font-weight: 500;">二维平面</h2>
				<div class="grid-single">
					<div class="grid-sizer">
					</div>
					<div class="grid-item" v-for="(item, index) in plane" :key="item.img">
						<a :href="'/images/works/' + item.img" data-effect="mfp-zoom-in">
							<img class="b-lazy" :data-src="'/images/works/thumb/' + item.img"
								:src="'/images/works/thumb/' + item.img" :alt="index + 1">
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
	onMounted,
	computed
} from 'vue'



const images = reactive([
	{ img: '20250304-1.jpg', type: 'news' },
	{ img: '20250304-2.jpg', type: 'news' },
	{ img: '20250304-3.jpg', type: 'news' },
	{ img: '20250304-4.jpg', type: 'news' },
	{ img: '20250304-5.jpg', type: 'news' },
	{ img: '20250304-6.jpg', type: 'news' },
	{ img: '20250304-7.jpg', type: 'news' },
	{ img: '20250304-8.jpg', type: 'news' },
	{ img: '20250304-9.jpg', type: 'news' },
	{ img: '20250304-10.jpg', type: 'news' },
	{ img: '20250304-11.jpg', type: 'news' },
	{ img: '20250304-12.jpg', type: 'news' },
	{ img: '20250304-13.jpg', type: 'news' },
	{ img: '20250304-14.jpg', type: 'news' },
	{ img: '20250304-15.jpg', type: 'news' },
	{ img: '20250304-16.jpg', type: 'news' },
	{ img: '20250304-17.jpg', type: 'news' },
	{ img: '20250304-18.jpg', type: 'news' },
	{ img: '20241020-1-tic.jpg', type: 'model' },
	{ img: '20241020-2-tic.jpg', type: 'model' },
	{ img: '20241020-3-tic.jpg', type: 'model' },
	{ img: '20241020-4-tic.jpg', type: 'model' },
	{ img: '20241020-5-tic.jpg', type: 'model' },
	{ img: '20241020-6-tic.jpg', type: 'model' },
	{ img: '20241020-7-tic.jpg', type: 'model' },
	{ img: '20241020-8-tic.jpg', type: 'model' },
	{ img: '20241019-1-tic.jpg', type: 'model' },
	{ img: '20241019-2-tic.jpg', type: 'model' },
	{ img: '20241019-3-tic.jpg', type: 'model' },
	{ img: '20241019-4-tic.jpg', type: 'model' },
	{ img: '20241019-5-tic.jpg', type: 'model' },
	{ img: '20241019-6-tic.jpg', type: 'model' },
	{ img: '20241019-7-tic.jpg', type: 'model' },
	{ img: '20241019-8-tic.jpg', type: 'model' },
	{ img: '20241019-9-tic.jpg', type: 'model' },
	{ img: '20241019-10-tic.jpg', type: 'model' },
	{ img: '20241019-11-tic.jpg', type: 'model' },
	{ img: '20241019-12-tic.jpg', type: 'model' },
	{ img: '20241019-13-tic.jpg', type: 'model' },
	{ img: '20241019-14-tic.jpg', type: 'model' },
	{ img: '20241019-15-tic.jpg', type: 'model' },
	{ img: '20241019-16-tic.jpg', type: 'model' },
	{ img: '20241019-17-tic.jpg', type: 'model' },
	{ img: '20241019-18-tic.jpg', type: 'model' },
	{ img: '20241019-19-tic.jpg', type: 'model' },
	{ img: '20241019-20-tic.jpg', type: 'model' },
	{ img: '20241019-21-tic.jpg', type: 'model' },
	{ img: '20241019-22-tic.jpg', type: 'model' },
	{ img: '20241019-23-tic.jpg', type: 'model' },
	{ img: '1-tic.jpg', type: 'model' },
	{ img: '2-tic.jpg', type: 'model' },
	{ img: '2-tic.png', type: 'model' },
	{ img: '3-tic.png', type: 'model' },
	{ img: '4-tic.png', type: 'model' },
	{ img: '8-tic.png', type: 'model' },
	{ img: '9-tic.png', type: 'model' },
	{ img: '10-1-tic.jpg', type: 'model' },
	{ img: '10-2-tic.jpg', type: 'model' },
	{ img: '10-3-tic.jpg', type: 'model' },
	{ img: '10-4-tic.jpg', type: 'model' },
	{ img: '10-6-tic.jpg', type: 'model' },
	{ img: '10-7-tic.jpg', type: 'model' },
	{ img: '10-8-tic.jpg', type: 'model' },
	{ img: '10-9-tic.jpg', type: 'model' },
	{ img: '10-10-tic.jpg', type: 'model' },
	{ img: '5-tic.png', type: 'plane' },
	{ img: '6-tic.png', type: 'plane' },
	{ img: '7-tic.png', type: 'plane' },
	{ img: '37-tic.jpg', type: 'plane' },
	{ img: '10-tic.jpg', type: 'plane' },
	{ img: '11-tic.jpg', type: 'plane' },
	{ img: '12-tic.jpg', type: 'plane' },
	{ img: '13-tic.jpg', type: 'plane' },
	{ img: '14-tic.jpg', type: 'plane' },
	{ img: '15-tic.jpg', type: 'plane' },
	{ img: '16-tic.jpg', type: 'plane' },
	{ img: '17-tic.jpg', type: 'plane' },
	{ img: '18-tic.jpg', type: 'plane' },
	{ img: '19-tic.jpg', type: 'plane' },
	{ img: '20-tic.jpg', type: 'plane' },
	{ img: '21-tic.jpg', type: 'plane' },
	{ img: '22-tic.jpg', type: 'plane' },
	{ img: '23-tic.jpg', type: 'plane' },
	{ img: '24-tic.jpg', type: 'plane' },
	{ img: '25-tic.jpg', type: 'plane' },
	{ img: '26-tic.jpg', type: 'plane' },
	{ img: '27-tic.jpg', type: 'plane' },
	{ img: '28-tic.jpg', type: 'plane' },
	{ img: '29-tic.jpg', type: 'plane' },
	{ img: '30-tic.jpg', type: 'plane' },
	{ img: '31-tic.jpg', type: 'plane' },
	{ img: '32-tic.jpg', type: 'plane' },
	{ img: '33-tic.jpg', type: 'plane' },
	{ img: '34-tic.jpg', type: 'plane' },
	{ img: '35-tic.jpg', type: 'plane' },
	{ img: '36-tic.jpg', type: 'plane' },

])

const news = computed(() => images.filter(item => item.type == 'news'))
const model = computed(() => images.filter(item => item.type == 'model'))
const plane = computed(() => images.filter(item => item.type == 'plane'))

onMounted(() => {
	// Gallery Single page START
	$('.grid-single .grid-item img').parazoom({
		customCursorIcon: 'images/magnify.svg',
		customCursorSize: '30px',
		transitionTime: '1s',
		transitionTimeLeave: '1s'
	});

	const $grid = $('.grid-single').masonry({
		itemSelector: '.grid-single .grid-item',
		percentPosition: true,
		columnWidth: '.grid-single .grid-sizer'
	});
	$grid.imagesLoaded().progress(() => {
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
			beforeOpen: function () {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure',
					'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	// Gallery Single page END
})
</script>

<style></style>