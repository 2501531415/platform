<template>
  <div class="platform-layout">
    <div
      class="platform-layout-vertical fixed"
    >
      <side-bar />
      <div class="platform-layout-vertical-main" :class="collapse ? 'is-collapse-main' : ''">
        <div class="fixed-header">
          <nav-bar />
          <tabs-bar/>
        </div>
        <app-main />
      </div>
    </div>
    <el-backtop />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavBar from "./components/NavBar"
  import AppMain from "./components/AppMain"
  import TabsBar from './components/TabsBar'
  import SideBar from './components/SideBar'
  export default {
    name: 'Layouts',
    components:{
      NavBar,
      AppMain,
      TabsBar,
      SideBar
    },
    computed:{
      ...mapGetters('setting',{
        collapse:'getCollapse'
      })
    },
  }
</script>

<style lang="scss" scoped>
  @mixin fix-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: $base-z-index - 2;
    width: 100%;
    overflow: hidden;
  }

  .platform-layout {
    position: relative;
    width: 100%;
    height: 100%;

    &-vertical {
      position: relative;
      &.fixed {
        padding-top: calc(#{$base-nav-bar-height} + #{$base-tabs-bar-height});
      }

      &.fixed.no-tabs-bar {
        padding-top: $base-nav-bar-height;
      }

      &-main {
        position: relative;
        margin-left: $base-left-menu-width;
        background: #f6f8f9;
        transition: $base-transition;
        padding: $base-padding;
        ::v-deep {
          .fixed-header {
            @include fix-header;

            left: $base-left-menu-width;
            width: $base-right-content-width;
            box-shadow: $base-box-shadow;
            transition: $base-transition;
          }

          .nav-bar-container {
            position: relative;
            box-sizing: border-box;
          }

          .tabs-bar-container {
            box-sizing: border-box;
          }

          .app-main-container {
            background: $base-color-white;
            border-radius: $base-border-radius;
          }
        }

        &.is-collapse-main {
          margin-left: $base-left-menu-width-min;

          ::v-deep {
            .fixed-header {
              left: $base-left-menu-width-min;
              width: calc(100% - 65px);
            }
          }
        }
      }
    }
  }
</style>
