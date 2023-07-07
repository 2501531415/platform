<template>
  <div class="home">
    <span class="test">我是主应用来的</span>
    <button @click="goBack">返回首页</button>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name:'HomeLayout',
  methods:{
    goBack(){
      this.$router.push('/')
    }
  }
}
</script>
