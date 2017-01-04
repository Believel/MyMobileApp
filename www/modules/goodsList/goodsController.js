// 首页的控制器
angular.module('goodsList.controller', ['goodsList.services'])
 .controller('goodsListController',function(
  $scope,
  $ionicPopup,
  $ionicModal,
  $ionicActionSheet,
  $interval, // 类似setInterval
  $timeout,
  $stateParams,  // 可以获得路由匹配的参数
  glServices
  ){
    // 已经可以接收参数!
    console.log($stateParams)
    // 1.根据参数得到相应的数据
    // console.log(glServices)
    var promise = glServices.getGoodsList()
    promise.then(function(res){
      $scope.goodsList = res.data
    })


    // 2.更新数据(下拉刷新)
    $scope.getNewData = function(){
      var promise02 = glServices.getNewData()
      promise02.then(function(res){
        $scope.goodsList = res.data
        //得到数据之后 应该隐藏加载动画.
        // 通知。ion-refresher ，数据已经加载完成
        $timeout(function(){
           $scope.$broadcast('scroll.refreshComplete')
        },2000)
      })
    }

    // 3.加载更多数据
    $scope.getMoreData = function(){
      console.log(111)
     var promise03 =  glServices.getMoreData()
     promise03.then(function(res){

      // 合并新数据和旧数据
       // $scope.goodsList = res.data
       // concat 合并数组方法,  Object.assign()  深拷贝
       // 返回一个新数组
       $scope.goodsList = $scope.goodsList.concat(res.data)

       // 得到数据之后也需求广播，隐藏上拉的动画
       $scope.$broadcast('scroll.infiniteScrollComplete')
     })
    }
 })
