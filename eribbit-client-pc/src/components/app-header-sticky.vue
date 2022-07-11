// 吸顶头部
<template>
  <div class="app-header-sticky">
    <div class="container">
      <router-link class="logo" to="/" />
      <AppHeaderNav/>
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from '@/components/app-header-nav.vue'

export default {
  // 组件名
  name: 'AppHeaderSticky',
  // 子组件映射
  components: { AppHeaderNav },
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {

  }
}
</script>

<style lang="less" scoped>
.app-header-sticky {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    width: 200px;
    height: 80px;
    // 设置图片, 不平铺 靠右显示 覆盖背景区域
    background: url(../assets/images/logo.png) no-repeat right / 160px;
  }
  .right {
    display: flex;
    width: 220px;
    padding-left: 40px;
    text-align: center;
    border-left: 1px solid #000;
    a {
      width: 40px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
