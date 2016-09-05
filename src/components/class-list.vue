<template>

  <div class="page" :transition="transitionName">
  	<div class="container">
 
  	<video src="http://v1.mukewang.com/4e6d01b3-a9a1-45d8-ad9f-9e5b23e1a299/L.mp4" controls="controls">
您的浏览器不支持该播放器 换个浏览器行吗？
		</video>
  <!--<p>当前路由参数: {{$route.params.classItems}}</p>-->
<div class="course-container">
	<ul class="course-chapter">
	 	<list-tpl v-for="item in datajson[$route.params.classItems]" >
	 		<span slot="one">{{item.title}}</span>
	 	</list-tpl>
                  
	</ul>
	
</div>

</div>
</div>
</template>

<script>
import listTpl from './class-list-list.vue'
var str = require('../json/class_items.json');
export default {
  data () {
    return {
      datajson:str,
      transitionName:null
    }
  },components: {
  	
  	  props: ["dataa"],
  		listTpl,
  			}, 
  			methods:{

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video{width: 100%;}

</style>
