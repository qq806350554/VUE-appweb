
<template >
<div class="course-lists">
	
	<!--开始-->
	
	<ul class="course-list" v-for="item in data_items[$route.params.classItems]" v-link='"/index/"+$route.params.classItems+"/"+item.uid'>
		<li  class="course-list-left"><img v-bind:src=item.img alt="" /></li>
		<li class="course-list-right">
		<h3  class='item-head'>{{item.title}}</h3>
			<div class='item-footer'>
			<span><i class="icon iconfont item-footer-icon">&#xe606;</i>{{item.writer}}</span>
			<span><i class="icon iconfont item-footer-icon">&#xe631;</i>{{item.date}}</span>
			</div>
		</li>
	</ul>
	<!--结束-->
	
	
</div>
</template>

<script>

var str = require('../json/class_items.json');

export default {
  data () {
    return {
    	data_items: str,
    	 transitionName: null
    }
  },
  ready(){
  	

    } ,route: {

    canActivate (transition) {
		transition.next()
		}
	}
}

</script>


<style scoped>
.course-list {
    box-sizing: content-box;
    width: 100%;
    height: 100px;
    padding-top: 10px;
    position: relative;
    border-bottom: 1px dashed #96adda;
}
ul.course-list>li {
    float: left;
    width: 50%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
}

li.course-list-left>img {
    width: 90%;
    max-width: 150px;
    display: block;
     height: 90px;
}
h3.item-head {
    font-size: 16px;
    font-weight: bold;
    list-style: 16px;
    max-height: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}

.item-footer {
    display: inline-block;
    font-size: 14px;
    color: #99a1a6;
    height: 29px;
    line-height: 29px;
    white-space: nowrap;
    vertical-align: middle;
    margin-top: 8%;
}
.item-footer {
    width: 100%;
}
.item-footer>span {
    width: 50%;
    display: inline-block;
}




.item-footer-icon{ font-size: 14px; color: #99a1a6;    margin-right: 5%;}
</style>