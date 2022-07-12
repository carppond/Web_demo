<template>
  <div class="container">
    <!-- 首页入口: 分类 + 广告 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
    </div>

  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import HomeCategory from './components/home-category.vue'

export default {
  // 组件名
  name: 'HomePage',
  // 子组件映射
  components: {
    HomeCategory
  },
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    // 生命周期方法 - DOM渲染前
    onBeforeMount(() => {
    })
    // 生命周期方法 - DOM渲染后
    onMounted(() => {
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  .hoverShadow();
  color: @xtxColor;
}
</style>
