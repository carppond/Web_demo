<template>
  <div>
    <!-- 顶部组件 -->
    <nav>顶部组件</nav>
    <!-- 头部组件 -->
    <header>头部组件</header>
    <!-- 内容容器 -->
    <div class="main">
      <!-- 二级路由 -->
      <RouterView></RouterView>
    </div>
    <!-- 底部组件 -->
    <footer>底部组件</footer>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  // 组件名
  name: 'LayoutPage',
  // 子组件映射
  components: {},
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

</style>
