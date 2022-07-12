<template>
  <div class="app-body">
    <!-- 顶部组件 -->
    <AppNavbar></AppNavbar>
    <!-- 吸顶头部 -->
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 头部组件 -->
    <AppHeader></AppHeader>
    <!-- 内容容器 -->
    <div class="main">
      <!-- 二级路由 -->
      <RouterView></RouterView>
    </div>
    <!-- 底部组件 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'

export default {
  // 组件名
  name: 'LayoutPage',
  // 子组件映射
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
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
    // 获取所有分类数据
    const store = useStore()
    store.dispatch('category/getCategoryList')
  }
}
</script>

<style lang="less" scoped>
.app-body {
  min-height: 2000px;
}
</style>
