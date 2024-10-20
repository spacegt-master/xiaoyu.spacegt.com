import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./router/index.js";
// element+ UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
