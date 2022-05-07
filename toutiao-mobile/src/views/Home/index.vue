<template>
    <div class="home-container">
      <van-nav-bar class="page-nav-bar" fixed>
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
        <van-tab
          v-for="obj in userChannels" :key="obj.id"
          :title="obj.name"
        >
          <!-- 文章列表 -->
          <ArticleList :channel="obj"></ArticleList>
        </van-tab>
        <div slot="nav-right" class="placeholder"></div>
        <div slot="nav-right" class="hamburger-btn">
          <i class="toutiao toutiao-gengduo"></i>
        </div>
      </van-tabs>
    </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list.vue'
export default {
  // 组件名
  name: 'HomeIndex',
  // 子组件映射
  components: {
    ArticleList
  },
  // 父传子,数据接收
  props: {},
  // 自定义属性
  data () {
    return {
      active: 0,
      userChannels: []
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期方法 - 初始化完成
  created () {
    this.loadChannels()
  },
  // 生命周期方法 - 挂载完成
  mounted () {},
  // 定义方法
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.userChannels = data.data.channels
      } catch (error) {
        console.log('获取数据是不', error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 174px;
  padding-bottom: 100px;
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
      position: fixed;
      top: 92px;
      z-index: 1;
      left: 0;
      right: 0;
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
    .placeholder {
      width: 66px;
      height: 82px;
      flex-shrink: 0;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.9;
      .toutiao {
        font-size: 33px;
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background-image: url('~@/assets/gradient-gray-line.png');
        background-size: contain;
      }
    }
  }
}

</style>
