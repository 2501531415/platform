<template>
  <div class="app-main-container" v-if="showView">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <!-- <router-view :key="key" class="app-main-height" /> -->
        <div id="subapp-viewport"></div>
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
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    width: 100%;
    overflow-y: auto;
    #subapp-viewport {
      height: $base-app-main-height;
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
