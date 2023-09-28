<template>
  <Layouts v-if="token"/>
  <router-view v-else></router-view>
</template>

<script>
import {mapGetters} from 'vuex'
import Layouts from '@/layouts'
export default {
  name: 'App',
  components:{
    Layouts
  },
  computed:{
    ...mapGetters({
      token:'user/getToken'
    })
  }
}
</script>

<style>

</style>
