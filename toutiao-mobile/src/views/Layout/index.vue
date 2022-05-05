<template>
  <div class="layout-container">
    <!-- 只路由出口 -->
    <router-view></router-view>

    <!-- 标签导航栏 -->
    <!-- router 开启路由模式 -->
    <van-tabbar v-model="active" class="layout-tabbar" route>
        <van-tabbar-item to="/">
            <i slot="icon" class="toutiao toutiao-shouye"></i>
            <span class="text">首页</span>
        </van-tabbar-item>
        <van-tabbar-item to="/question">
            <i slot="icon" class="toutiao toutiao-wenda"></i>
            <span class="text">问答</span>
        </van-tabbar-item>
        <van-tabbar-item to="/video">
            <i slot="icon" class="toutiao toutiao-shipin"></i>
            <span class="text">视频</span>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
            <i slot="icon" class="toutiao toutiao-wode"></i>
            <span class="text">我的</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 组件名
  name: 'LayoutIndex',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 自定义属性
  data () {
    return {
      active: 0
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期方法 - 初始化完成
  created () {},
  // 生命周期方法 - 挂载完成
  mounted () {},
  // 定义方法
  methods: {}
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
