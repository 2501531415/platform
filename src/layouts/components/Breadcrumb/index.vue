<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'Breadcrumb',
    computed:{
      ...mapGetters({
        routes:"permission/getViewRoutes",
        breadcrumb:"tabsView/getBreadcrumb"
      }),
    },
    watch: {
      $route() {
        if(this.routes){
          this.setBreadcrumb({routes:this.routes,path:this.$route.path})
        }
      },
    },
    methods: {
      ...mapActions({
        'setBreadcrumb':'tabsView/setBreadcrumb'
      })
      
    },
  }
</script>

<style lang="scss" scoped>
  .breadcrumb-container {
    height: $base-nav-bar-height;
    font-size: $base-font-size-default;
    line-height: $base-nav-bar-height;

    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          a {
            display: flex;
            float: left;
            font-weight: normal;
            color: #515a6e;

            i {
              margin-right: 3px;
            }
          }
        }

        &:last-child {
          .el-breadcrumb__inner {
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
