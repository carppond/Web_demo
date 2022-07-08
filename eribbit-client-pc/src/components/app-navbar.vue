<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ profile.account }}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  // 组件名
  name: 'AppNavbar',
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
    const store = useStore()
    const { profile } = store.state.user
    return { profile }
  }
}
</script>

<style lang="less" scoped>
  .app-topnav {
    background-color: #333;
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 53px;
      li {
        a {
          padding: 0 15px;
          color: #cdcdcd;
          line-height: 1;
          display: inline-block;
          i {
            font-size: 15px;
            margin-right: 2px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
        ~ li {
          a {
            border-left: 2px solid #666;
          }
        }
      }
    }

  }
</style>
