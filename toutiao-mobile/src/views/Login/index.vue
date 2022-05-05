<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入手机号"
      />
      <van-field
        type="password"
        name="密码"
        placeholder="请输入验证码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  // 组件名
  name: 'LoginIndex',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 自定义属性
  data () {
    return {
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
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
