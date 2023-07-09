<template>
  <component
    :is="menuComponent"
    v-if="!item.hidden"
    :item="item"
    :route-children="routeChildren"
  >
    <template v-if="item.children && item.children.length">
      <side-bar-item
        v-for="route in item.children"
        :key="route.path"
        :item="route"
      />
    </template>
  </component>
</template>

<script>
  import MenuItem from './MenuItem'
  import Submenu from './Submenu'
  import SideBarItem from './SideBarItem'
  import { isExternal } from '@/utils/validate'
  import path from 'path'

  export default {
    name: 'SideBarItem',
    props: {
      item: {
        type: Object,
        required: true,
      }
    },
    components:{
      Submenu,
      MenuItem,
      SideBarItem
    },
    data() {
      this.onlyOneChild = null
      return {}
    },
    computed: {
      menuComponent() {
        if (
          this.handleChildren(this.item.children, this.item) &&
          (!this.routeChildren.children ||
            this.routeChildren.notShowChildren) &&
          !this.item.alwaysShow
        ) {
          return 'MenuItem'
        } else {
          return 'Submenu'
        }
      },
    },
    methods: {
      handleChildren(children = [], parent) {
        if (children === null) children = []
        const showChildren = children.filter((item) => {
          if (item.hidden) {
            return false
          } else {
            this.routeChildren = item
            return true
          }
        })
        if (showChildren.length === 1) {
          return true
        }

        if (showChildren.length === 0) {
          this.routeChildren = {
            ...parent,
            notShowChildren: true,
          }
          return true
        }
        return false
      }
    },
  }
</script>

<style lang="scss" scoped>
  .vab-nav-icon {
    margin-right: 4px;
  }

  ::v-deep {
    .el-tag {
      float: right;
      height: 16px;
      padding-right: 4px;
      padding-left: 4px;
      margin-top: calc((#{$base-menu-item-height} - 16px) / 2);
      line-height: 16px;
      border: 0;
    }
  }
</style>
