// 首页的控制器
angular.module('home.controller', [])
 .controller('homeController',function(
  $scope,
  $ionicPopup, //弹出框
  $ionicModal,
  $ionicActionSheet,
  $interval // 类似setInterval
  ){
 
  // 1.初始化头部的滚动条(swiper),
  // 用id是因为页面可能有多个swiper
  
  // 出生 ，这个$ionicView.enter是dom存在之后触发。
  $scope.$on('$ionicView.enter',function(){
    // 注意，会有轮播图的dom结构未加载的情况
    new Swiper('#headerSlider',{
      autoplay: 3000,//可选选项，自动滑动
    })

    new Swiper('#toutiaoSlider',{
      autoplay:800,
      direction : 'vertical',// 表示垂直方向轮播.
    })
  })
// 头部搜索框-背景颜色渐变
  
  

    killseconds()
  // miaosha // 掌上秒杀
  function killseconds(){
      // 剩余时间 
      var timeLeft = {h:0, m: 1, s:3} // 1:3:0      1:0:0   0.0.0
      $scope.timeLeft = timeLeft
      // setInterval()
      var id = $interval(function(){
        timeLeft.s--                  // 1:3:-1     1:0:-1
         if(timeLeft.s == -1 ){       // 1:3:-1     
            timeLeft.m --             // 1:2:-1     1:-1:-1  
            timeLeft.s = 59           // 1:2:59     1:-1:59 
             // 0:59:59
         }
    
         if(timeLeft.m== -1){                  //1:-1:59         
          
          timeLeft.h--                         //0:-1:59
          timeLeft.m = 59                      //0:59:59
          // timeLeft.s = 59
         }
         if(timeLeft.h== -1){                
          // h如果 == -1 表示时间到了
          timeLeft.h = 0
          timeLeft.s = 0
          timeLeft.m = 0                     //0:0:0
          console.log('结束了')
          $interval.cancel(id) // 结束计时
         }
        console.log(JSON.stringify(timeLeft))
      }, 1000)
  }

  // 获取数据的十位，和个位数
  $scope.getNum =  function (num){
     // 1
     if(num<10) return num
     // 28
     return num%10
  }
  $scope.getTen = function(num){
    // 1
    if(num<10) return 0
    // 28
    // 28/10 2.8
    return parseInt(num/10)
  }
  // 回到顶部功能
  
 })
