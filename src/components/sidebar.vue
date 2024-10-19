<template>
	<div class="sidebar">
		<div class="menu-wrap">
			<a href="/" class="sidebar-logo">
				<img src="/images/logo.svg" />
				<span>于嘉欣</span>
			</a>
			<nav class="menu-nav">
				<ul>
					<li>
						<router-link to="/home">首页</router-link>
					</li>
					<li>
						<router-link to="/about">关于我</router-link>
					</li>
					<li>
						<router-link to="/gallery-single">作品画廊</router-link>
					</li>
					<li>
						<router-link to="/contact">联系</router-link>
					</li>
				</ul>
				<div class="menu-contacts">
					<a href="tel:+8613194253520" class="menu-contacts__item">
						<span class="menu-contacts__icon">
							<i class="fa fa-phone-square">
							</i>
						</span>
						<p>+86 13194253520</p>
					</a>
					<a href="mailto:juliadona@gmail.com" class="menu-contacts__item">
						<span class="menu-contacts__icon">
							<i class="fa fa-envelope">
							</i>
						</span>
						<p>2223963146@qq.com</p>
					</a>
				</div>
				<div class="menu-close__wrap">
					<a href="#" class="menu-close">
						<img style="transform: rotate(180deg);" src="/images/arrow-right.svg" alt="">
					</a>
				</div>
			</nav>
		</div>
		<a href="/" class="logo">
			<img src="/images/logo.svg" alt="">
			<span>于嘉欣</span>
		</a>
		<a href="#" class="hamburger-button">
			<span>
			</span>
			<span>
			</span>
			<span>
			</span>
		</a>
	</div>
</template>

<script>
</script>

<style>
</style>