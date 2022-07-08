<template>
  <router-view></router-view>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import request from '@/utils/request'

export default {
  // 组件名
  name: 'App',
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
    const fn = () => {
      request('/member/profile', 'get')
    }
    return { fn }
  }
}
</script>

<style lang="less" scoped>

</style>
