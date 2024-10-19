<template>
	<section class="s-contact">
		<sidebar-vue></sidebar-vue>
		<div class="content-page contact-content" style="background-image: url('/images/image-bg-contact.jpg');">
			<div class="content-inner">
				<div class="text-center contact-title">
					<h2 class="title wow animate__fadeIn">联系方式</h2>
					<div class="subtitle wow animate__fadeIn" data-wow-delay="0.2s">
						<p>如需进一步沟通，请留下您的联系方式。</p>
					</div>
				</div>

				<div class="contact-row">
					<div class="left">
						<!-- Hidden Required Fields -->
						<input type="hidden" name="project_name" value="Sylvia">
						<input type="hidden" name="admin_email" value="bauka.abdi@gmail.com">
						<input type="hidden" name="email_from" value="info@masterdev37.com">
						<input type="hidden" name="form_subject" value="New letter from the site Sylvia">
						<!-- END Hidden Required Fields -->

						<div class="input-field wow animate__fadeIn" tabindex="1" data-wow-delay="0.3s">
							<input v-model="form.name" name="Name" type="text" id="contact-name" maxlength="50" required>
							<label for="contact-name">姓名</label>
						</div>

						<div class="input-field wow animate__fadeIn" tabindex="1" data-wow-delay="0.5s">
							<input v-model="form.email" name="Email" type="text" id="contact-email" maxlength="50">
							<label for="contact-email">电子邮箱</label>
						</div>

						<div class="input-field wow animate__fadeIn" tabindex="1" data-wow-delay="0.5s">
							<input v-model="form.phone" name="Phone" type="text" id="contact-phone" autocomplete="tel"
								required>
							<label for="contact-email">手机号</label>
						</div>

						<div class="input-field wow animate__fadeIn" tabindex="1" data-wow-delay="0.7s">
							<textarea v-model="form.message" name="Message" id="contact-message" cols="30"
								rows="7"></textarea>
							<label for="contact-message">留言</label>
						</div>

						<div class="button-field wow animate__fadeInUp" data-wow-delay="0.9s">
							<button type="submit" @click="sendEmail">发送</button>
						</div>
					</div>

					<div class="right">
						<div class="contact-info">
							<a href="tel:+3704418614" class="contact-info-item wow animate__fadeInRight"
								data-wow-delay="0.1s">
								<span class="contact-info-icon">
									<i class="fa fa-phone-square"></i>
								</span>
								<div class="contact-info-text">
									<h5 class="contact-info-title">Phone</h5>
									<div class="contact-info-val">+86 13194253520</div>
								</div>
							</a>
							<a href="mailto:juliadona@gmail.com" class="contact-info-item wow animate__fadeInRight"
								data-wow-delay="0.3s">
								<span class="contact-info-icon">
									<i class="fa fa-envelope"></i>
								</span>
								<div class="contact-info-text">
									<h5 class="contact-info-title">Email</h5>
									<div class="contact-info-val">2223963146@qq.com</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import {
		ElNotification
	} from 'element-plus'
	import sidebarVue from '../components/sidebar.vue'
	import {
		send
	} from '../api/email.js'
	import {
		ref,
		reactive
	} from 'vue'

	const form = reactive({
		name: '',
		email: '',
		phone: '',
		message: ''
	})

	const sendEmail = async () => {
		ElNotification({
			title: '信息已发送',
			type: 'success',
		})
		const res = await send('2223963146@qq.com', '作品集', '联系方式',
			JSON.stringify([
				form.name,
				form.email,
				form.phone,
				form.message
			]))
	}
</script>
<style>
</style>