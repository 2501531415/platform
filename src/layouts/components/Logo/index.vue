<template>
  <div class="logo">
    <img src="~@/assets/image/logo.png" alt="">
		<span class="logo-title" v-if="!isCollapse">QianKun Admin</span>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name:"Logo",
		computed:{
			...mapGetters({
				isCollapse:'setting/getCollapse'
			})
		},
	}
</script>

<style lang="scss" scoped>
.logo{
	display: flex;
	align-items: center;
	height: 48px;
  padding: 10px;
	transition: all .2s ease;
  cursor: pointer;
	margin-left: 6px;
	img{
		width: 32px;
    height: 32px;
	}
	&-title{
		transition: all .5s;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
		color: #fff;
		padding-left: 10px;
	}
}


</style>