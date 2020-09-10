<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/category">分类</router-link> |
      <router-link to="/cart">购物车</router-link> |
      <router-link to="/profile">我的</router-link>
    </div> -->
    <!-- 顶部导航 -->
    <nav-bar>
      <!-- <div slot="left">左</div> -->
      <div slot="center">购物街</div>
      <!-- <div slot="right">右</div> -->
    </nav-bar>

    <!-- 轮播图 父传子 -->
    <home-swiper :swiperItemList="swiperList"></home-swiper>

    <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home";

import HomeSwiper from "views/home/childrenComponent/HomeSwiper";

export default {
  name: "App",
  components: {
    MainTabBar,
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      swiperList: null
    };
  },
  created() {
    // 请求多个数据
    getHomeMultiData().then(res => {
      this.swiperList = res;
    });
  }
};
</script>

<style>
@import "assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
