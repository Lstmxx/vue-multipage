<template>
  <div class="main">
    <!-- <router-link :to="path">find-house</router-link> |
    <router-link to="/user">user</router-link> -->
    <router-view/>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from '@/components/index/tab-bar/index'
export default {
  components: {
    TabBar
  },
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
@import './main.less';
</style>
