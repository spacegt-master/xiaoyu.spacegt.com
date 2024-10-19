import {
	createRouter,
	createWebHistory
} from 'vue-router';

export const generalRoutes = [{
	path: '/',
	redirect: '/home',
	children: [{
		path: 'home',
		name: 'Home',
		component: () => import('../pages/home.vue')
	}, {
		path: 'about',
		name: 'About',
		component: () => import('../pages/about.vue')
	}, {
		path: 'gallery',
		name: 'Gallery',
		component: () => import('../pages/gallery.vue')
	}, {
		path: 'gallery-single',
		name: 'Gallery-Single',
		component: () => import('../pages/gallery-single.vue')
	}, {
		path: 'contact',
		name: 'Contact',
		component: () => import('../pages/contact.vue')
	}]
}]


const router = createRouter({
	history: createWebHistory(),
	routes: generalRoutes
})

export default router