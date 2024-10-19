<template>
	<section class="gallery">
		<sidebar-vue></sidebar-vue>
		<div class="content-page gallery-content gallery-wrap">
			<div class="content-inner">
				<div class="title-wrapper text-center">
					<h2 class="title">作品集 - 画廊</h2>
					<div class="subtitle">
						<p>
							我的作品集是一场内心的视觉盛宴。我通过色彩的碰撞和线条的交织，探索潜意识的深处，表达情感的流动和宇宙的奥秘。每一幅画作都是一次心灵的对话，我希望观众能够在作品中找到属于自己的情感共鸣。
						</p>
					</div>
				</div>
				<div class="album-tab">
					<a href="javascript:void(0)" v-for="item in category"
						:class="{'is-active':categoryActive==item.value}"
						@click="categoryActive=item.value">{{item.label}}</a>
				</div>
				<!-- Album Animals START -->
				<div class="grid-album is-active" id="album-animals">
					<div class="grid-sizer"></div>
					<div class="grid-item album-item" v-for="work in works">
						<a href="gallery-single.html">
							<div class="album-thumb">
								<img :src="work.cover" :data-src="work.cover" alt="Graceful Zebra">
							</div>
							<div class="album-name">{{work.name}}</div>
							<div class="album-desc">
								{{work.describe}}
							</div>
						</a>
					</div>
				</div>
			</div><!-- end container-inner -->
		</div>
	</section>
</template>

<script setup>
	import sidebarVue from '../components/sidebar.vue'
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'

	const category = reactive([{
		label: '全部',
		value: 'all'
	}, {
		label: '模型',
		value: 'model'
	}, {
		label: '绘画',
		value: 'drawing'
	}, {
		label: '设计',
		value: 'design'
	}])
	const categoryActive = ref('all')
	const works = reactive([{
		name: 'Photoshop 手稿',
		cover: '/images/works/1-tic.jpg',
		describe: '手绘，不仅仅是绘画，更是一种艺术表达。',
		category: 'drawing'
	}])

	onMounted(() => {
		// Album page START
		function albumMasonry() {
			var $gridAlbum = $('.grid-album').masonry({
				itemSelector: '.grid-album .grid-item',
				percentPosition: true,
				columnWidth: '.grid-album .grid-sizer'
			});
			$gridAlbum.imagesLoaded().progress(function() {
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
			$('.grid-album.is-active:not(' + href + ')').removeClass(
				'animate__animated animate__slideInUp');

			albumMasonry();
		});
		// Album page END
	})
</script>

<style>
</style>