// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
// 配置路由
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    // 重定向，在项目跑起来的时候，访问/会定向访问首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
