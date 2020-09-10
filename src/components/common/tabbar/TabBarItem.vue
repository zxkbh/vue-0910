<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{ active: isActive }" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive:true
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.startsWith(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    itemClick() {
      // 重复点击报错
      if (this.$route.path != this.path) {
        this.$router.replace(this.path);
      }
      // try {
      //   this.$router.replace(this.path)
      // } catch (error) {

      // }
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}

.tab-bar-item .active {
  color: #ff5777;
}
</style>
