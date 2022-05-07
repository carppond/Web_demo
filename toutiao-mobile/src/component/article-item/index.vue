<template>
     <van-cell
      class="article-item"
     >
       <div slot="title" class="title van-multi-ellipsis--l2"> {{ article.title }}</div>
       <div slot="label" class="label-info-wrap">
          <div v-if="article.cover.type === 3" class="cover-wrap">
            <div
              class="cover-item"
              v-for="(img, index) in article.cover.images" :key="index"
            >
               <van-image
                 class="cover-item-img"
                 fit="cover"
                 :src="img"
               />
            </div>
          </div>

          <span> {{ article.aut_name }}</span>
          <span> {{ article.comm_count }}评论</span>
          <span> {{ article.pubdate }}</span>
       </div>
       <van-image
          class="right-cover"
          slot="default"
          v-if="article.cover.type === 1"
          fit="cover"
          :src="article.cover.images[0]"
       />
     </van-cell>
</template>

<script>
export default {
  // 组件名
  name: 'ArticleItem',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  // 自定义属性
  data () {
    return {}
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
.article-item {
     .title {
          font-size: 32px;
          color: #3a3a3a
     }
     .van-cell__value {
          flex: unset;
          width: 232px;
          height: 146px;
          border-radius: 4px;
          padding-left: 25px;
     }
     .right-cover {
          width: 232px;
          height: 146px;
     }
     .label-info-wrap {
          span {
               font-size: 22px;
               color: #b4b4b4;
               margin-right: 25px;
          }
          .cover-wrap {
               display: flex;
               padding: 30px 0;
               .cover-item {
                    flex: 1;
                    height: 146px;
                    &:not(:last-child) {
                         padding-right: 5px;
                    }
                    .cover-item-img {
                         width: 100%;
                         height: 146px;
                    }
               }
          }
     }
}
</style>
