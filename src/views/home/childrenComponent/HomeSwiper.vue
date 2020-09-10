<template>
  <swiper>
    <swiper-item v-for="item in swiperItemList">
      <a :href="item">
        <img :src="item" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: "HomeSwiper",
  props:{
    swiperItemList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
