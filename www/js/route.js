// 主路由模块
// 这里的模块负责引入其他所有的模块的路由
angular.module('starter.route', [
 'home.route',
 'tab.route',
 'category.route',
 'goodsList.route',
 'account.route'
  ])
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/tab/home')
})