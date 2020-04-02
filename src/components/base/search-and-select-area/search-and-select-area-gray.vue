<template>
  <div class="selectArea">
      <div class="positionSearchBar" style="padding-right: 20px">
        <div class="address gray">
          <span style="width:29px;height: 22px"></span>
          <image></image>
        </div>
        <input class="fakeSearch gray" type="text" @tap="turnsToSearch" :disabled="disabled">
      </div>
  </div>
</template>

<script>
export default {
  name: 'SelectArea'
}
</script>

<style lang="less" scoped>
@import './select-area.less';
</style>
