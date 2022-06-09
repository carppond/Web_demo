<template>
  <div class="container">
    app{{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account: 'ls'})">设置用户信息</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
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
  }
}
</script>

<style lang="less" scoped>

</style>
