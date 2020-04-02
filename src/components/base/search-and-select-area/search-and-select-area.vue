<template>
  <div class="search-and-select-area">
    <div class="search-bar" v-if="!isGray" >
      <a href="select-city.html">
      <div class="address" v-if="!isFocus">
      <!-- <span v-if="selectedCity">{{selectedCity.name}}</span>
      <span v-else style="width:29px;height: 22px"></span> -->
        <span >广州</span>
        <svg-icon iconClass="down" style="height: 20px;width: 20px"></svg-icon>
      </div>
      </a>
      <input v-if="disabled" class="fakeSearch" type="text" placeholder="小区、区域、地铁站" :disabled="disabled">
      <input v-if="!disabled" type="text" placeholder="小区、区域、地铁站" @focus="isFocus = true" v-model="fullKeyword" confirm-type="search" @confirm="changeFullKeyword">
      <span v-if="isFocus" style="padding:0px 20px;text-align:center;min-width: 44px" @tap="onCancel">取消</span>
    </div>
    <SelectAreaGray v-else style="width: 100%"></SelectAreaGray>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SearchAndSelectArea',
  data () {
    return {
      isFocus: false,
      disabled: true,
      isGray: false
    }
  },
  methods: {
    turnsToSearch () {

    }
  }
}
</script>
<style lang="less" scoped>
@import './search-and-select-area.less';
</style>
