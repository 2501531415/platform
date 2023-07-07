<template>
  <el-scrollbar class="side-bar-container" :class="{ 'is-collapse': collapse }">
    <!-- <vab-logo /> -->
    <el-menu
      :background-color="variables['menu-background']"
      :text-color="variables['menu-color']"
      :active-text-color="variables['menu-color-active']"
      :default-active="activeMenu"
      :collapse="collapse"
      :collapse-transition="false"
      :unique-opened="uniqueOpened"
      mode="vertical"
    >
      <template v-for="route in routes">
        <side-bar-item
          :key="route.path"
          :full-path="route.path"
          :item="route"
        />
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import variables from "@/assets/styles/variables.module.scss";
import { mapGetters } from "vuex";
import { uniqueOpened } from "@/setting";
import SideBarItem from "./components/SideBarItem";

export default {
  name: "SideBar",
  data() {
    return {
      uniqueOpened,
      routes: [{
        path: "/vue2",
        name: "微应用",
        meta: {
          title: "微应用",
          icon: "el-icon-menu",
        },
        children: [
          {
            path: "test1",
            name: "测试微应用1",
            meta: {
              title: "测试1",
              icon: "el-icon-eleme",
            },
          },
          {
            path: "project/test",
            name: "测试微应用12",
            meta: {
              title: "测试2",
              icon: "el-icon-eleme",
            },
          },
        ],
      }],
    };
  },
  components: {
    SideBarItem,
  },
  computed: {
    ...mapGetters("setting", {
      collapse: "getCollapse",
    }),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: $base-color-white;
    background-color: $base-menu-background-active !important;
  }

  &.is-active {
    color: $base-color-white;
    background-color: $base-menu-background-active !important;
  }
}

.side-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: $base-z-index;
  width: $base-left-menu-width;
  height: 100vh;
  overflow: hidden;
  background: $base-menu-background;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width $base-transition-time;

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0;

    ::v-deep {
      .el-menu {
        transition: width $base-transition-time;
      }

      .el-menu--collapse {
        border-right: 0;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }
      }
    }
  }

  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-menu {
      border: 0;

      .vab-fas-icon {
        padding-right: 3px;
        font-size: $base-font-size-default;
      }

      .vab-remix-icon {
        padding-right: 3px;
        font-size: $base-font-size-default + 2;
      }
    }

    .el-menu-item,
    .el-submenu__title {
      height: $base-menu-item-height;
      overflow: hidden;
      line-height: $base-menu-item-height;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }

    .el-menu-item {
      @include active;
    }
  }
}
</style>
