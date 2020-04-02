<template>
  <div class="find-house">
    <SelectAndSearchArea />
    <img alt="Vue logo" src="../../../../assets/logo.png">
    <a href="ceshi2.html">点我兄弟</a>
    <button @click="test">hello</button>
  </div>
</template>
<script>
import { post } from '@/libs/requestApi'
import SelectAndSearchArea from '@/components/base/search-and-select-area/index'
export default {
  name: 'FindHouse',
  components: {
    SelectAndSearchArea
  },
  data () {
    return {
    }
  },
  methods: {
    test () {
      const config = {
        url: 'search/company-house-promotion/list-of-customer',
        data: {}
      }
      post(config).then((responseData) => {
        console.log(responseData)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import './find-house.less';
</style>
