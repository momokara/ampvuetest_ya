<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-tree-select :items="items"
                       :main-active-index="mainActiveIndex"
                       :active-id="activeId"
                       @clickItem="onClickItem"
                       @clickNav="onClickNav"
                       content-item-class="content-item-class"></van-tree-select>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Rate API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Rate Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'

export default {
  data () {
    return {
      title: '',
      items: [
        {
          // 导航名称
          text: '所有城市',
          // 该导航下所有的可选项
          children: [...apiData.pro1, ...apiData.pro2]
        },
        {
          // 导航名称
          text: apiData.pro1Name,
          // 该导航下所有的可选项
          children: apiData.pro1
        },
        {
          text: apiData.pro2Name,
          children: apiData.pro2
        },
        {
          text: apiData.pro3Name,
          disabled: true,
          children: apiData.pro3
        }
      ],
      mainActiveIndex: 0,
      activeId: [1, 4, 2]
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickNav (e) {
      console.log(e.mp.detail)
      this.mainActiveIndex = e.mp.detail.index || 0
    },

    onClickItem (e) {
      console.log(this.activeId, e.mp.detail)
      this.activeId = this.toggleArray(this.activeId, e.mp.detail.id)
    },
    toggleArray (array, id) {
      let i = array.indexOf(id)
      if (i >= 0) {
        array.splice(i, 1)
      } else {
        array = array.concat(...[id])
        array = Array.from(new Set(array))
      }
      return array
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad (option) {
    if (option) {
      this.title = option.label
    }
  }
}
</script>


<style lang="scss">
</style>
