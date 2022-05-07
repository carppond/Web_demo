<template>
     <div class="article-list">
       <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
          >
            <!-- <van-cell v-for="item in list" :key="item.art_id" :title="item.title" /> -->
            <ArticleItem
              v-for="(obj, index) in list" :key="index"
              :article="obj"
            ></ArticleItem>
          </van-list>
       </van-pull-refresh>
     </div>
</template>

<script>
import { getArticles } from '@/api/articles'
import ArticleItem from '@/component/article-item/index.vue'
export default {
  // 组件名
  name: 'ArticleList',
  // 子组件映射
  components: {
    ArticleItem
  },
  // 父传子,数据接收
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  // 自定义属性
  data () {
    return {
      // 列表数据
      list: [],
      loading: false,
      finished: false,
      error: false, // 是否加载失败
      timestamp: null,
      isRefreshLoading: false
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
  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({
          timestamp: this.timestamp || new Date().getTime(),
          channel_id: this.channel.id
        })
        // 2. 把数据添加到 list 数组中
        const { results } = data.data
        this.list.push(...results)
        // 3. 设置本次加载中 loading 状态结束
        this.loading = false
        // 4. 判断数据是否加载结束
        if (results.length) {
          // 更新获取下一页数据的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 没有数据了，设置加载状态结束，不再触发上拉加载更多了
          this.finished = true
        }
      } catch (error) {
        console.log('请求失败', error)
        this.loading = false
        this.error = true
      }
    },
    async onRefresh () {
      try {
        // 1. 请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id, // 频道 id
          timestamp: new Date().getTime() // 下拉刷新每次都应该获取最新数据
        })
        // 2. 将数据追加到列表的顶部
        const { results } = data.data
        this.list.unshift(...results)

        // 3. 关闭下拉刷新的 loading 状态
        this.isRefreshLoading = false

        // 提示成功
        this.refreshSuccessText = `刷新成功，更新了${results.length}条数据`
      } catch (err) {
        console.log(err)
        this.isRefreshLoading = false // 关闭下拉刷新的 loading 状态
        this.$toast('刷新失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-list {
  height: 79vh;
  overflow-y: auto;
}
</style>
