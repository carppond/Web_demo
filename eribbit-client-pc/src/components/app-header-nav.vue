<template>
  <!-- 导航列表 -->
  <ul class="app-header-nav">
    <li class="home"><router-link to="/">首页</router-link></li>
    <li
    v-for="item in list" :key="item.id"
    @mouseenter="show(item)"
    @mouseleave="hide(item)">
      <router-link
      :to="`/category/${item.id}`"
      @click="hide(item)"
      >
      {{ item.name }}
      </router-link>
      <div class="layer" :class="{open: item.open}">
        <ul>
          <li v-for="subItem in item.children" :key="subItem.id">
            <router-link :to="`/category/sub/${subItem.id}`" @click="hide(item)">
              <img :src="subItem.picture">
              <p>{{ subItem.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  // 组件名
  name: 'AppHeaderNav',
  // 子组件映射
  components: {},
  // 父传子,数据接收
  props: {},
  // 创建实例前
  setup () {
    const store = useStore()
    // 获取到 vuew 中的分类列表
    const list = computed(() => {
      return store.state.category.categoryList
    })
    // 跳转的时候不会关闭二级类目,通过数据来控制
    // 1. vuex每个数据加上 open 的数据
    // 2. vuex提供显示和隐藏函数,修改 open 数据
    // 3. 在组件中使用 vuex 函数, 使用事件来绑定,提供一个类名显示隐藏的类名
    const show = (item) => {
      store.commit('category/show', item.id)
    }
    const hide = (item) => {
      store.commit('category/hide', item.id)
    }
    return { list, show, hide }
  }
}
</script>

<style lang="less" scoped>
.app-header-nav {
      display: flex;
      justify-content: space-around;
      width: 820px;
      padding-left: 40px;
      position: relative;
      z-index: 999;
      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;
        a {
          height: 32px;
          line-height: 32px;
          font-size: 16px;
        }
        &:hover {
            > a {
              color: @xtxColor;
              border-bottom: 1px solid @xtxColor;
            }
            // > .layer {

            // }
          }
      }
      .layer {
        &.open {
          height: 140px;
          opacity: 1;
        }
        width: 1245px;
        height: 0;
        // height: 130px;
        background-color: #fff;
        position: absolute;
        left: -200px;
        top: 56px;
        transition: all .2s .1s;
        opacity: 0;
        overflow: hidden;
        box-shadow:  0 0 5px 0.2em #ccc;
        ul {
          display: flex;
          // justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
          padding: 0 70px;
          height: 140px;
          li {
            width: 110px;
            text-align: center;
            img {
              width: 60px;
              height: 60px;
              margin-bottom: 5px;
            }
            &:hover {
              color: @xtxColor;
            }
          }
        }
      }
    }
</style>
