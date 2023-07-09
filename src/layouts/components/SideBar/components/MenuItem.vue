<template>
  <el-menu-item :index="routeChildren.path" @click="handleLink">
    <i :class="routeChildren.meta.icon" v-if="routeChildren.meta && routeChildren.meta.icon"></i>
    <span>{{ routeChildren.meta.title }}</span>
    <el-tag v-if="routeChildren.meta && routeChildren.meta.badge" type="danger" effect="dark">
      {{ routeChildren.meta.badge }}
    </el-tag>
  </el-menu-item>
</template>

<script>
import { isExternal } from '@/utils/validate'
import path from 'path'

export default {
  name: 'MenuItem',
  props: {
    routeChildren: {
      type: Object,
      default() {
        return null
      },
    },
    item: {
      type: Object,
      default() {
        return null
      },
    },
    fullPath: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleLink() {
      const routePath = this.routeChildren.path
      const { name } = this.routeChildren
      const { title, target } = this.routeChildren.meta

      if (target === '_blank') {
        if (isExternal(routePath)) {
          window.open(routePath)
        }
      } else {
        if (isExternal(routePath)) {
          window.location.href = routePath
        } else if (
          this.$route.path !== routePath
        ) {
          this.$router.push({
            name: title || name,
            path: routePath,
          })
        }
      }
    },
  },
}
</script>
