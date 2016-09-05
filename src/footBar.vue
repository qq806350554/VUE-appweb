<link rel="stylesheet" href="style/css/commond.css" />
<template>
	
				<div class="pages" >
		<router-view  keep-alive></router-view>

  <div class="foot_bar" >
			<a v-for='item in footdata' v-link=item.luyou  >
				<i class="iconfont"> {{{item.icon}}}</i>
				<span class="tab-label"> {{item.name}}</span>
			</a>
		</div>
			</div>
</template>
<script>
import Hello from './components/Hello';

var footdata=[{
	icon:'&#xe65a;',
	name:'首页',
	luyou:'/index' 
},{
	icon:'&#xe602;',
	name:'搜索',
	luyou:'/search'
},{
	icon:'&#xe61d;',
	name:'泳池',
	luyou:'/yongchi' 
},{
	icon:'&#xe606;',
	name:'我的',
	luyou:'/myself' 
}];




export default {
  data () {
    return {
      footdata: footdata,
    }
  }



}
</script>
<style  >

body, html {
    width: 100%;
    position: relative;
    height: 100%;
}


	.pages {
		    margin-top: 34px;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #fbf9fe;	
	}
	
	.page {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #fbf9fe;	
	}	

	.container	{
		position: relative;
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		background: #fbf9fe;
	}

	.inner-scroll {

	}
	
	.v-transition	{
		-webkit-transition: .4s;
		transition: .4s;	
		z-index: 1000
	}
	
	.v-enter, .v-leave {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}	

	.show-transition {
	  -webkit-transition: opacity .8s;	  
	  transition: opacity .8s;
	  z-index: 1000
	}
	
	.show-enter, .show-leave{
		opacity: 0;
	}
	
	.left-transition	{
		z-index: 1000
	}		
	.right-transition	{
		z-index: 1001
	}
	
	.right-enter {
	  -webkit-animation: pageFromRightToCenter 400ms forwards;
	  animation: pageFromRightToCenter 400ms forwards;
	}
	.right-leave {
	  -webkit-animation: pageFromCenterToRight 400ms forwards;
	  animation: pageFromCenterToRight 400ms forwards;
	}
	@-webkit-keyframes pageFromRightToCenter {
	  from {
		-webkit-transform: translate3d(100%, 0, 0);
	  }
	  to {
		-webkit-transform: translate3d(0, 0, 0);
	  }
	}
	@keyframes pageFromRightToCenter {
	  from {
		transform: translate3d(100%, 0, 0);
	  }
	  to {
		transform: translate3d(0, 0, 0);
	  }
	}
	@-webkit-keyframes pageFromCenterToRight {
	  from {
		-webkit-transform: translate3d(0, 0, 0);
	  }
	  to {
		-webkit-transform: translate3d(100%, 0, 0);
	  }
	}
	@keyframes pageFromCenterToRight {
	  from {
		transform: translate3d(0, 0, 0);
	  }
	  to {
		transform: translate3d(100%, 0, 0);
	  }
	}
	
	.left-leave {
	  -webkit-animation: pageFromCenterToLeft 400ms forwards;
	  animation: pageFromCenterToLeft 400ms forwards;
	}
	.left-enter {
	  -webkit-animation: pageFromLeftToCenter 400ms forwards;
	  animation: pageFromLeftToCenter 400ms forwards;
	}
	@-webkit-keyframes pageFromCenterToLeft {
	  from {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
	  }
	  to {
		opacity: 0.9;
		-webkit-transform: translate3d(-20%, 0, 0);
	  }
	}
	@keyframes pageFromCenterToLeft {
	  from {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	  }
	  to {
		opacity: 0.9;
		transform: translate3d(-20%, 0, 0);
	  }
	}
	@-webkit-keyframes pageFromLeftToCenter {
	  from {
		opacity: 0.9;
		-webkit-transform: translate3d(-20%, 0, 0);
	  }
	  to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
	  }
	}
	@keyframes pageFromLeftToCenter {
	  from {
		opacity: 0.9;
		transform: translate3d(-20%, 0, 0);
	  }
	  to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	  }
	}

	
	.material-transition	{
		z-index: 1001
	}
	
	.material-enter {
	  pointer-events: none;
	  -webkit-animation: pageFromBottomToCenter 400ms forwards;
	  animation: pageFromBottomToCenter 400ms forwards;
	}
	.material-leave {
	  pointer-events: none;
	  -webkit-animation: pageFromCenterToBottom 400ms forwards;
	  animation: pageFromCenterToBottom 400ms forwards;
	}
	@-webkit-keyframes pageFromBottomToCenter {
	  from {
		opacity: 0;
		-webkit-transform: translate3d(0, 56px, 0);
	  }
	  to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
	  }
	}
	@keyframes pageFromBottomToCenter {
	  from {
		opacity: 0;
		transform: translate3d(0, 56px, 0);
	  }
	  to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	  }
	}
	@-webkit-keyframes pageFromCenterToBottom {
	  from {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
	  }
	  to {
		opacity: 0;
		-webkit-transform: translate3d(0, 56px, 0);
	  }
	}
	@keyframes pageFromCenterToBottom {
	  from {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	  }
	  to {
		opacity: 0;
		transform: translate3d(0, 56px, 0);
	  }
	}

	.zoom-transition	{
		z-index: 1001
	}
	
	.zoom-enter {
	  pointer-events: none;
	  //opacity: 1;
	  -webkit-animation: zoomIn 400ms forwards;
	  animation: zoomIn 400ms forwards;
	}
	.zoom-leave {
	  pointer-events: none;
	  //opacity: 1;
	  -webkit-animation: zoomOut 400ms forwards;
	  animation: zoomOut 400ms forwards;
	}
	@-webkit-keyframes zoomIn {
	  from {
		opacity: 0;
		-webkit-transform: scale(0.8, 0.8);
	  }
	  to {
		opacity: 1;
		-webkit-transform: scale(1, 1);
	  }
	}
	@keyframes zoomIn {
	  from {
		opacity: 0;
		transform: scale(0.8, 0.8);
	  }
	  to {
		opacity: 1;
		transform: scale(1, 1);
	  }
	}
	@-webkit-keyframes zoomOut {
	  from {
		opacity: 1;
		-webkit-transform: scale(1, 1);
	  }
	  to {
		opacity: 0;
		-webkit-transform: scale(0.8, 0.8);
	  }
	}
	@keyframes zoomOut {
	  from {
		opacity: 1;
		transform: scale(1, 1);
	  }
	  to {
		opacity: 0;
		transform: scale(0.8, 0.8);
	  }
	}	
</style>
