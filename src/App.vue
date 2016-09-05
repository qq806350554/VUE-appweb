<template>
  <div id="app" v-link='"/index"'>
  <h3>{{message}}</h3>
  </div>
  <footerbar></footerbar>
</template>

<script>
import Hello from './components/Hello'
import footerbar from './footBar'
export default {
	    data() {
            return {message:'欢迎光临'}
        },
 			 components: {
  				  footerbar
  			}, 
  			methods: {

       }
}



</script>

<style scoped>
	#app {
    position: fixed;
    top: 0px;
    background-color: rgba(200,200,250,.8);
    font-size: 10px;
    padding: 10px;
    color: #5350b9;
    display: block;
    width: 100%;
    z-index: 99999;
}
</style>