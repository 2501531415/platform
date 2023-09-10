<template>
  <div class="app-main-container" v-if="showView">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <div id="subapp-viewport"></div>
        <router-view :key="key" class="base-viewport"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      return {
        fullYear: new Date().getFullYear(),
        showView:true
      }
    },
    computed:{
      key(){
        return this.$route.path
      },
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    width: 100%;
    height: $base-app-main-height;
    #subapp-viewport,.base-viewport{
      height: 100%;
      overflow-y: auto;
    }

    .footer-copyright {
      min-height: 55px;
      line-height: 55px;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      border-top: 1px dashed $base-border-color;
    }
  }
</style>
