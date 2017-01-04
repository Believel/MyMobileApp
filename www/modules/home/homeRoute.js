// 首页自己的路由
angular.module('home.route', ['home.controller'])
.config(function($stateProvider){
   var homeState = {
     name:'tab.home',
     url:'/home',
     // 这里路径的引用要注意
     templateUrl:'./modules/home/homeView.html',
     // controller用来暴露数据给模板
     controller:'homeController'
   }
   $stateProvider.state(homeState)
})