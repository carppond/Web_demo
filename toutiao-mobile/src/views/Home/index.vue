<template>
    <div class="home-container">
      <van-nav-bar class="page-nav-bar" >
        <van-button
          class="search-btn"
          slot="title"
          type="info"
          round
          size="small"
          icon="search"
        >
        搜索
        </van-button>
      </van-nav-bar>
      <!-- 频道列表 -->
      <van-tabs class="channel_tab" v-model="active" animated swipeable>
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
</template>

<script>
export default {
  // 组件名
  name: 'HomeIndex',
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
.home-container {
  ::v-deep.van-nav-bar__title  {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }
  ::v-deep.channel_tab {
    .van-tabs__wrap {
      height: 82px;
    }
    .van-tab {
      min-width: 200px;
      border-right: 1px solid #edeff3;
      font-size: 30px;
      color: #777;
    }
    .van-tab--active {
      font-size: 33px;
      color: #333;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }
    .van-tabs__line{
      width: 31px !important;
      height: 6px ;
      background-color: #3296fa;
      bottom: 8px;
    }
  }
}

</style>
