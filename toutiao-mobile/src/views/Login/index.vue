<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <!-- time 倒计时时间 -->
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 10"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            native-type="button"
            round size="small"
            type="default"
            @click="onSendSms"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>

      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'

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
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
        // mobile: '', // 手机号
        // code: '' // 验证码
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8|9]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      isCountDownShow: false // 是否展示倒计时
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
    async onSubmit (values) {
      // 1. 获取表单数据
      const user = this.user
      // TODO: 2. 表单验证

      // 在组件中,必须通过 this.$toast 来调用组件
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0 // 持续时间,默认 2s
      })
      // 3. 提交表单,请求登录
      try {
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或者验证码错误')
          return
        }
        this.$toast.fail('登录失败, 请稍后重试')
      }
      // 4. 根据请求,响应结果,处理后续操作
    },
    // 发送验证码
    async onSendSms () {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过')
      } catch (error) {
        return console.log('验证失败')
      }
      // 2. 验证通过,显示倒计时
      this.isCountDownShow = true
      // 3. 请求发送验证码
      this.$toast.loading({
        message: '发送中...',
        forbidClick: true,
        duration: 0 // 持续时间,默认 2s
      })
      try {
        await getSmsCode(this.user.mobile)
        this.$toast.success('发送成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号不正确')
        } else if (err.response.status === 429) {
          this.$toast.fail('发送太频繁了')
        } else {
          this.$toast.fail('服务器数据异常')
        }
        this.isCountDownShow = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    color: #999;
    background-color: #ededed;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
