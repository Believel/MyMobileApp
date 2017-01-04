// 首页自己的路由
angular.module('account.route', ['account.controller'])
.config(function($stateProvider){
   var accountState = {
     name:'tab.account',
     url:'/account',
     // 这里路径的引用要注意
     templateUrl:'./modules/account/accountView.html',
     // controller用来暴露数据给模板
     controller:'accountController'
   }
   $stateProvider.state(accountState)
})