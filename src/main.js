import Vue from 'vue'
import App from './App'
//import VueRouter from './js/vue-router.js'

import FootBar from './footBar'
import common from './style/css/commond.css'


var VueRouter = require('vue-router')
// 不要忘了调用此方法
Vue.use(VueRouter)

export const router = new VueRouter({
	history: false,
	initialTransition: 'show',
	transition: ['left','right'],
	saveScrollPosition: true
})
var search = Vue.extend({
    template: '<p>这页面还没弄</p>'
})
var yongchi = Vue.extend({
    template: '<p>4444</p>'
})

var myself = Vue.extend({
    template: '<p>vue开发的spa应用程序作者：队长神圣不可侵犯！·666</p>'
})





router.map({
    '/index': {
        component: function(reslove){
				 require(['./components/indexNew.vue'],reslove)
			},auth: true,
    },
        '/index/:classItems': {
        component: function(reslove){
				 require(['./components/classNew.vue'],reslove)
			},auth: true,
    },
    
      '/index/:classItems/:classItems_list': {
        component: function(reslove){
				 require(['./components/class-list.vue'],reslove)
			},auth: true,

    },
    
    '/search': {
       component: function(reslove){
				 require(['./components/searchNew.vue'],reslove)
				
			},auth: true
			
    },
    '/yongchi': {
 		     component: function(reslove){
				 require(['./components/indexNew.vue'],reslove)
				
			},auth: true
    },
    '/myself': {
     component: function(reslove){
				 require(['./components/searchNew.vue'],reslove)
				
			},auth: true
    },
  
})
   router.redirect({
'*': '/index'
})

//获取当前路由的路径
router.beforeEach(function (transition) {
if (transition.to.auth) {
		console.log(transition.to.path);
		transition.next();
		}else{
				console.log('未找到当前路由');
					transition.next();
			 }
										})

router.start(App, '#app')

//router.start(FootBar, '#app')