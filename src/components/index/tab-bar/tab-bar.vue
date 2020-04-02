<template>
  <div class="tab-bar">
    <div
    class="item"
    v-for="(data, index) in meunList"
    :key="index"
    :style="{ 'color': selectPath === data.path ? '#ff9900' : '' }"
    @click="routerLink(data.path)"
    @tap="routerLink(data.path)">
      <svg-icon :iconClass="data.icon" style="height: 26px;width: 26px"></svg-icon>
      <span>{{data.name}}</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TabBar',
  data () {
    return {
      selectPath: 'FindHouse',
      meunList: [
        {
          name: '找房',
          path: 'FindHouse',
          icon: 'find-house'
        },
        {
          name: '我的',
          path: 'User',
          icon: 'user'
        }
      ]
    }
  },
  methods: {
    routerLink (path) {
      if (this.selectPath === path) {
        return
      }
      this.selectPath = path
      this.$router.push({
        name: path
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import './tab-bar.less';
</style>
