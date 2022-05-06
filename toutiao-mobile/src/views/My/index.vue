<template>
  <div class="my-container">
        <!-- 头部已登录 -->
    <div v-if="user" class="header user-info">
      <!-- 个人信息 -->
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            :src="userInfo.photo"
          />
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="base-stats">
        <div class="data-item">
          <span class="content">{{ userInfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="content">{{ userInfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="content">{{ userInfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="content">{{ userInfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <!-- 头部未登录 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <!-- 消息通知-小智同学 退出登录-->
    <van-cell title="消息通知" is-link/>
    <van-cell class="xiaozhi" title="小智同学" is-link/>
    <van-cell v-if="user" class="lagout-cell" title="退出登录" @click="lagoutClick" clickable/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  // 组件名
  name: 'MyIndex',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 自定义属性
  data () {
    return {
      userInfo: {}
    }
  },
  // 计算属性
  computed: {
    ...mapState(['user'])
  },
  // 侦听器
  watch: {},
  // 生命周期方法 - 初始化完成
  created () {
    // 用户登录了,请求登录信息
    if (this.user) {
      this.loadUserInfo()
    }
  },
  // 生命周期方法 - 挂载完成
  mounted () {},
  // 定义方法
  methods: {
    lagoutClick () {
      // 1. 退出提示
      this.$dialog.confirm({
        title: '确认退出吗'
      }).then(() => {
        // 确认执行这里的代码
        this.$store.commit('setUser', null)
      }).catch(() => {
        // 取消执行这里的代码
      })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (error) {
        this.$toast('获取数据是不,请稍后重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 361px;
    background-image: url("~@/assets/banner.png");
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 231px;
      padding: 76px 32px 23px 32px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 3px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .base-stats {
      display: flex;
      .data-item {
        flex: 1;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .content {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 141px;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      span.text {
        font-size: 28px;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
    }
  }
  .lagout-cell {
    margin-top: 10px;
    text-align: center;
    color: #e28c8c;
  }
}
</style>
