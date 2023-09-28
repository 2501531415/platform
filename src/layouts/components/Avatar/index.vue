<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img class="user-avatar" src="~@/assets/image/logo.png" alt="" />
      <div class="user-name">
        管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapMutations,mapActions } from 'vuex'
  export default {
    name: 'Avatar',
    methods: {
      ...mapMutations({
        delAllVisitedRoutes:'tabsView/delAllVisitedRoutes',
        removeRoutes:'permission/removeRoutes'
      }),
      ...mapActions({
        logoutAction:'user/logout'
      }),
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
        }
      },
      personalCenter() {
        this.$router.push('/personalCenter/personalCenter')
      },
      logout() {
        this.logoutAction()
        this.delAllVisitedRoutes()
        this.removeRoutes()
        this.$router.push('/login')
      },
    },
  }
</script>
<style lang="scss" scoped>
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;

    .user-avatar {
      width: 40px;
      height: 40px;
      margin-left: 15px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
