<template>
  <span :title="isFullscreen ? '退出全屏' : '进入全屏'" class="screenfull">
    <i :class="[isFullscreen?'el-icon-switch-button':'el-icon-full-screen']" @click="click"></i>
  </span>
</template>

<script>
  import screenfull from 'screenfull'

  export default {
    name: 'FullScreenBar',
    data() {
      return {
        isFullscreen: false,
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.destroy()
    },
    methods: {
      click() {
        if (!screenfull.isEnabled) {
          this.$message.error('开启全屏失败')
          return false
        }
        screenfull.toggle()
        this.$emit('refresh')
      },
      change() {
        this.isFullscreen = screenfull.isFullscreen
      },
      init() {
        if (screenfull.isEnabled) {
          screenfull.on('change', this.change)
        }
      },
      destroy() {
        if (screenfull.isEnabled) {
          screenfull.off('change', this.change)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.screenfull{
  margin-left: $base-icon-margin;
  cursor: pointer;
  i{
    font-size: $base-font-size-big;
  }
}
</style>
