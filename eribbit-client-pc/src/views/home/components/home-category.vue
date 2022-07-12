<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="`/category/${item.id}`">{{item.name}}</router-link>
        <template v-if="item.children">
           <router-link
            v-for="subItem in item.children" :key="subItem.id"
            :to="`/category/sub/${subItem.id}`">{{subItem.name}}</router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onBeforeMount, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  // 组件名
  name: 'HomeCategory',
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
    // 最终使用数据 = 9 个分类 + 品牌
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [
        {
          id: 'brand-child',
          name: '品牌推荐'
        }
      ]
    })
    const menuList = computed(() => {
      // 得到 9 个分类,且每个一级分类下的子分类都有两个
      const list = store.state.category.categoryList.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      // 追加品牌数据
      list.push(brand)
      return list
    })
    return { menuList }
  }
}
</script>

<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  .menu {
    li {
      height: 50px;
      line-height: 50px;
      padding-left: 40px;
      a {
        color: #fff;
        font-size: 14px;
        margin-right: 10px;
        &:first-child {
          font-size: 16px;
        }
      }
      &:hover {
        background-color: @xtxColor;
      }
    }
  }
}
</style>
