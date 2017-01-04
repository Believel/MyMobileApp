// 首页自己的路由
angular.module('goodsList.route', ['goodsList.controller'])
.config(function($stateProvider){
   var goodsListState = {
     name:'goodsList',
     url:'/goodsList/:id', // 设置一个路由参数
     // 这里路径的引用要注意
     templateUrl:'./modules/goodsList/goodsListView.html',
     // controller用来暴露数据给模板
     controller:'goodsListController'
   }
   $stateProvider.state(goodsListState)
})