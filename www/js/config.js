angular.module('starter.config', [])
 .config(function($ionicConfigProvider){

   // 这里是做一些兼容性配置.
   $ionicConfigProvider.platform.android.tabs.position('bottom')
   $ionicConfigProvider.platform.ios.tabs.position('bottom')
 })
