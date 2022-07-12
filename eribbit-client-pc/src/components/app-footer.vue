<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="../assets/images/qrcode.jpg"> </dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-0000 <span>周一至周日 8:00-18:00</span></dd>
          <!-- <dd class="hottime">周一至周日 8:00-18:00</dd> -->
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="other">
      <div class="container">
        <!-- 标语 -->
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  // 组件名
  name: 'AppFooter',
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
.app-footer {
  // position: fixed;
  // left: 0;
  // bottom: 0;
  width: 100%;
  background-color: #f3f3f3;
  padding-top: 40px;
  overflow: hidden;
  .contact {
    background-color: #fff;
    height: 290px;
    .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 57px 0 80px 0;
      dl {
        height: 150px;
        border-right: 1px solid #eee;
        padding: 0 65px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          border: none;
        }
        dt {
          margin-bottom: 35px;
          color: #8e8e8e;
          font-size: 20px;
          line-height: 1;
        }
        dd {
          float: left;
          border: 1px solid #eee;
          width: 90px;
          height: 90px;
          margin-right: 15px;
          .iconfont {
            font-size: 36px;
            display: block;
            color: #666;
          }
          &:hover {
            .iconfont {
              color: @xtxColor;
            }
          }
          // &:first-child {

          // }
        }
        .download {
          border: none;
          padding: 5px 0;
          span {
            display: block;
            color: @xtxColor;
          }
          a {
            display: block;
            width: 100px;
            height: 30px;
            margin-top: 5px;
            background-color: @xtxColor;
            color: #fff;
            text-align: center;
            line-height: 30px;
          }
        }
        .hotline {
          border: none;
          width: 160px;
          font-size: 18px;
          font-weight: 700;
          color: #666;
          span {
            display: block;
            font-size: 15px;
            font-weight: 400;
            color: @xtxColor;
          }
        }
      }
    }

  }
  .other {
    background-color: #2d2d2d;
    .container {
      .slogan {
        height: 178px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #444;
        a {
          font-size: 30px;
          color: #fff;
          line-height: 30px;
          .iconfont {
            font-size: 50px;
            margin-right: 10px;
            padding-top: 10px;
            vertical-align: middle;
          }
        }
      }
      .copyright {
        height: 165px;
        p {
          padding-top: 40px;
          text-align: center;
           color: @xtxColor;
          a {
            padding: 0 12px;
            border-right: 1px solid @xtxColor;
            color: @xtxColor;
            font-size: 15px;
            &:last-child {
              border: none;
            }
          }
          &:last-child {
            padding-top: 20px;
          }
        }
      }
    }
  }
}
</style>
