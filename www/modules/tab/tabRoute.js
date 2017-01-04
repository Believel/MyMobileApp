// tab选项卡对应的路由
angular.module('tab.route', [])
.config(function($stateProvider){
  var tabState = {
    name:'tab',
    url:'/tab',
    templateUrl:'./modules/tab/tabView.html',
    // 要和 /home同时访问   /tab/home
    abstract:true
  }
  $stateProvider.state(tabState)
})