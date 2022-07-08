<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo"><router-link to="/">小兔仙</router-link></h1>
      <!-- 导航列表 -->
      <ul class="navs">
        <li class="home"><router-link to="/">首页</router-link></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
      </ul>
      <!-- 搜索 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" name="" id="" placeholder="搜一搜">
      </div>
      <!-- 购物车 -->
      <div class="cart">
        <a href="#" class="curr">
          <i class="iconfont icon-cart"></i><em>2</em>
          </a>
      </div>
    </div>
  </header>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  // 组件名
  name: 'AppHeader',
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
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        // 设置图片, 不平铺 水平居中 覆盖背景区域
        background: url(../assets/images/logo.png) no-repeat center 18px / contain;
      }
    }
    .navs {
      display: flex;
      justify-content: space-around;
      width: 820px;
      padding-left: 40px;
      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;
        a {
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          &:hover {
            color: @xtxColor;
            border-bottom: 1px solid @xtxColor;
          }
        }
      }
    }
    .search {
      width: 170px;
      height: 32px;
      line-height: 32px;
      border-bottom: 1px solid #e7e7e7;
      // position: relative;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }
    .cart {
      position: relative;
      width: 50px;
      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        display: block;
        .icon-cart {
          font-size: 22px;
        }
        em {
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          font-style: normal;
          line-height: 1;
          background: @helpColor;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
}
</style>
