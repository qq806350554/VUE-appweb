
<template >

  <div class="page" :transition="transitionName">
  	<div class="container">
  	<!--轮播图开始-->
  	<div class="main_visual">
	<div class="flicking_con">
		<a href="#">1</a>
		<a href="#">2</a>
		<a href="#">3</a>
		<a href="#">4</a>
		<a href="#">5</a>
	</div>
	<div class="main_image">
		<ul>
			<li><span class="img_3"></span></li>
			<li><span class="img_4"></span></li>
			<li><span class="img_1"></span></li>
			<li><span class="img_2"></span></li>
			<li><span class="img_5"></span></li>
		</ul>

	</div>
</div>
  	<!--轮播图结束-->
  	
  	
  	
  	
  	

  <!--前端-->
  <div class="grids">
  	<h3 class="demos-title">前端开发</h3>
  	<a  class="grid" v-for='item in data_class_type.data_qianduan' v-link='"/index/"+item.name'>
				<i class="grid_icon iconfont">{{{item.icon}}}</i>
				<span class="grid_name"> {{item.name}}</span>
  	</a>
  </div>
  <!--后台-->
  
    <div class="grids">
    	  	<h3 class="demos-title">后台开发</h3>
  	<a  class="grid" v-for='item in data_class_type.data_houtai' v-link='"/index/"+item.name'>
				<i class="grid_icon iconfont">{{{item.icon}}}</i>
				<span class="grid_name"> {{item.name}}</span>
  	</a>
  </div>
  <!--美工-->
  
    <div class="grids">
    	  	<h3 class="demos-title">视觉设计</h3>
  	<a  class="grid" v-for='item in data_class_type.data_sheji' v-link='"/index/"+item.name'>
				<i class="grid_icon iconfont">{{{item.icon}}}</i>
				<span class="grid_name"> {{item.name}}</span>
  	</a>
  </div>
    <!--美工-->
  </div>
</div>

</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import Jsonloader from 'json-loader'
    Vue.use(Resource)
		Vue.use(Jsonloader)
    
    //import '../json/index_class.json';
 require('../js/jquery-1.7.1.min.js');
require('../js/jquery.event.drag-1.5.min.js');
require('../js/jquery.touchSlider.js');
require('../style/css/style.css');  
require('../js/lunbotu_start.js'); 


//轮播图插件开始
//轮播图插件结束

var str = require('../json/index_class.json');

export default {
  data () {
    return {
    	data_class_type: str,
    	 transitionName: null
    }
  },
  route: {
	data (transition){

	},  
    canActivate (transition) {
		transition.next()
	},
    activate (transition) {
		this.transitionName = 'material'
		this.$nextTick(function () {
			transition.next()
		})		
	},	
    canDeactivate (transition) {
		this.transitionName = 'material'
		transition.next()
	},
	deactivate (transition) {
		transition.next()
	},
  },

	ready(){
// console.log(str)
    }
}

</script>


<style scoped>
.grids{overflow: hidden; 
   border-bottom: 1px solid #d9d9d9;
   }
a.grid:before {
    content: '';
    height: 100%;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    width: 0px;
    right: 0px;
    top: 0px;
    position: absolute;
    overflow: hidden;
    transform-origin: 150% 0;
    transform: scaleX(.5);
}
a.grid:after {
    content: '';
    width: 100%;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    bottom: 0px;
    left: 0px;
    height: 0px;
    position: absolute;
    overflow: hidden;
    transform-origin: 0 150%;
    transform: scaleY(.5);
}

.grid{
	position: relative;
	width: 25%;
			display: block;
			float: left;
			padding: 15px 8px;
			text-align: center;}
span.grid_name {
    width: 100%;
    display: inline-block;
    font-size: .6rem;
}
.demos-title {
    text-align: center;
    font-size: 1.4rem;
    color: #3cc51f;
    font-weight: 400;
    padding: .5rem 0;
   border-bottom: 1px solid #d9d9d9;
}




</style>