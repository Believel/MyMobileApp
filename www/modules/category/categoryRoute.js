// 首页自己的路由
angular.module('category.route', ['category.controller'])
.config(function($stateProvider){
   var categoryState = {
     name:'tab.category',
     url:'/category',
     // 这里路径的引用要注意
     templateUrl:'./modules/category/categoryView.html',
     // controller用来暴露数据给模板
     controller:'categoryController'
   }
   $stateProvider.state(categoryState)
})