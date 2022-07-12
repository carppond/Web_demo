// 吸顶头部
<template>
  <div class="app-header-sticky" :class="{show: offsetY >= 78}">
    <div class="container" v-show="offsetY >= 78">
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
import { onMounted, ref } from 'vue'
export default {
  // 组件名
  name: 'AppHeaderSticky',
  // 子组件映射
  components: { AppHeaderNav },
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    // 获取偏移量
    const offsetY = ref(0)
    onMounted(() => {
      window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop
        offsetY.value = scrollTop
      }
    })
    return { offsetY }
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
  z-index: 1000;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  // 滑动 78 显示
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
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
