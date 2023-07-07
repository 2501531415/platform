<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <full-screen-bar @refresh="refreshRoute" />
          <avatar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import Breadcrumb from '../Breadcrumb'
  import Avatar from '../Avatar'
  import FullScreenBar from '../FullScreenBar'

  export default {
    name: 'NavBar',
    data() {
      return {
        pulse: false,
      }
    },
    components:{
      Breadcrumb,
      Avatar,
      FullScreenBar
    },
    computed:{
      ...mapGetters('setting',{
        collapse:'getCollapse'
      })
    },
    methods: {
      ...mapMutations('setting',{
        changeCollapse:'changeCollapse'
      }),
      // 折叠/展开菜单
      handleCollapse(){
        this.changeCollapse(!this.collapse)
      },
      // 更新路由
      refreshRoute(){
        console.log(6)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;

    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
        font-size: $base-font-size-big;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;

      ::v-deep {
        svg {
          width: 1em;
          height: 1em;
          margin-right: 15px;
          font-size: $base-font-size-small;
          color: $base-color-gray;
          cursor: pointer;
          fill: $base-color-gray;
        }

        button {
          svg {
            margin-right: 0;
            color: $base-color-white;
            cursor: pointer;
            fill: $base-color-white;
          }
        }

        .el-badge {
          margin-right: 15px;
        }
      }
    }
  }
</style>
