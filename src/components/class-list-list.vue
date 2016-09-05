<template>
	<li>
		<h2 class="chapter-title" v-on:click="isshow()">
          	<i class="icon iconfont item-section-section">&#xe608;</i> 
          	<slot name="one">获取失败</slot> <i class="icon iconfont item-section-open">&#xe64f;</i> 
          </h2>
		<ul class="course-sections" v-show="open"  my-directive="fff"  transition="expand">
			<li><i class="icon iconfont course-sections-icon-luxiang">&#xe631</i>
				<a>1-1 JSON课程介绍</a>
			</li>
			<li><i class="icon iconfont course-sections-icon-luxiang">&#xe631</i>
				<a>1-1 JSON课程介绍</a>
			</li>
			<li><i class="icon iconfont course-sections-icon-luxiang">&#xe631</i>
				<a>1-1 JSON课程介绍</a>
			</li>
		</ul>

	</li>
</template>
<script>
import vue from 'vue'
var open="true"
export default {
  data () {
    return {
      isShow:'false',
      open:true
      
    }
  },   methods:{
  isshow: function (msg) {
  	
  	
  	
  	
  this.open=!this.open

    }
  	
  } ,route: {

    canActivate (transition) {
		transition.next()
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video{width: 100%;}
.chapter-title {
    background: #ecf0f3;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 0 20px 0 10px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #d5dce1;
    position: relative;
}
.item-section-open,	.item-section-close{
	font-size: 12px;
	float: right;
	    color: #9b9598;
    font-weight: bold;
	}
.item-section-section{
	color: #86c110;
	    font-size: 20px;
    margin-right: 5px;
      position: relative;
}
ul.course-chapter>li {
    position: relative;
    background-color: #fff;
}
ul.course-sections>li {
    font-size: 14px;
    color: #444;
    margin-left: 10px;
    line-height: 30px;
    height: 30px;
}
.course-sections-icon-luxiang{
	color: #73858c;
   font-size: 14px;
    margin-left: 9px;}
    ul.course-sections {
    padding: 0px 0px;
}


/* 必需 */
.expand-transition {
  transition: all .3s ease;
  height: 100px;
  display: block;

}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
height: 0px;
z-index: -888;
}

</style>
