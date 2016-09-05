
	<template>
<div class='page' :transition="transitionName">
		<div class="container">
	<div class="search">
<div class="search-inner">
    <i class="icon iconfont icon-search">&#xe602;</i> <input name="query" v-model="searchQuery" class="search-input">
</div>
</div>

<h3 v-for="items in gridData ">
<span v-for="it in items | filterBy searchQuery" v-link="'/index/'+'html5/'+it.uid" class="search-list"> 
{{it.title}}
</span>
</h3>


</div>
</div>
</template>
<!-- demo root element -->
<script >
var str = require('../json/class_items.json');
var ppp="ooooo"
export default {
  data () {
  	return{
    searchQuery : '',
    newdata:{},
      gridData: str,
     transitionName: null
    
}
  },
  ready () {

  },
  route: {

    canActivate (transition) {
		transition.next()
		}
	},
  methods:{
  	show:function(){
  		console.log(str)
  	}
  	
  }

}
</script>
<style scoped>
	.search{background-color:#efeff4;padding:0.4rem 0.5rem}
	
	.icon-search{
		  height: 1.4rem;
		  float: left;
		  background:#fff;
		  font-size: .9rem;
		  color: #99b1de;
		  line-height: 25px;
 		  padding-left: 11px;
  	  border-top-left-radius: 5px;
  	  border-bottom-left-radius: 5px;
	}
	.search-input{    padding: 0;
    width: 80%;
    height: 1.4rem;
    border: 0;
        outline: none;
    font-size: .7rem;
    line-height: 1.4rem;
    box-sizing: content-box;
    background: #fff; 
    border-top-right-radius: 5px;
    padding-left: 10px;
  	  border-bottom-right-radius: 5px;}
  	  .search-list{
  	  	display: block;
  	  	white-space:nowrap;
  	  	 overflow:hidden;
  	  	  text-overflow:ellipsis;
  	  }
  	  .search-list{
  	  	    color: #3d4145;
  	  	    font-size: .85rem;
  	  	    padding: 10px;
  	  }
</style>