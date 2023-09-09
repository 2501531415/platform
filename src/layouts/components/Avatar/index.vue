<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img class="user-avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" />
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
  import { mapActions } from 'vuex'
  export default {
    name: 'Avatar',
    methods: {
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
