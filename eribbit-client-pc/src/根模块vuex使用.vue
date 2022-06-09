<template>
  <div>
    app
    <!-- 1. 使用根模块state -->
    <p>{{ $store.state.username }}</p>
    <!-- 2. 使用根模块的 getter 的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.getters['newName'] }}</p>

    <button @click="changeName">修改名字</button>
    <button @click="changeName1">修改名字1</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  // 组件名
  name: 'App',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    // 使用 vuex 仓库
    const store = useStore()
    // 1. 使用根模块的 state 数据
    console.log(store.state.username)
    // 2. 使用根模块的 getters 数据
    console.log(store.getters.newNmae)
    // 生命周期方法 - DOM渲染前
    onBeforeMount(() => {
    })
    // 生命周期方法 - DOM渲染后
    onMounted(() => {
    })
    const changeName = () => {
      // 3. 提交根模块 mutetions 函数
      store.commit('updateName')
    }
    const changeName1 = () => {
      // 4. 调用根模块的 actions 函数
      store.dispatch('updateName')
    }
    return { changeName, changeName1 }
  }
}
</script>

<style lang="less" scoped>

</style>
