import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
  // 注册路由：下面的写法是KV一致省略V
  router
}).$mount("#app");