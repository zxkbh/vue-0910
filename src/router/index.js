import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

import Category from 'views/category/Category.vue'
import Cart from 'views/cart/Cart.vue'
import Profile from 'views/profile/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Category.vue")
    component:Category
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 修改标签选中的样式
  linkActiveClass:'router-active'
});

export default router;
