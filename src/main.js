import {
	createApp
} from 'vue'
import App from './App.vue'
// 路由
import router from './router/index.js'
// element+ UI
import ElementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
 
const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
	locale: zhCn
})
app.mount('#app')