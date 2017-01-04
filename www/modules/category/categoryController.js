// 首页的控制器
angular.module('category.controller', ['category.service'])
 .controller('categoryController',function(
  $scope,
  $ionicPopup,
  $ionicModal,
  $ionicActionSheet,
  $interval, // 类似setInterval
  cyService
  ){

  // 1.得到分类列表的数据
  // 我们在controller里调用service时的方法得数据
  var promise = cyService.getCategoryList()
  console.log(promise)
  // promise.success()
  promise.then(function(res){
    // console.log(res) res.data
    $scope.categoryList = res.data
  })

  // 2.得到分类的详情数据
  var promise2 = cyService.getDetail(1)
  promise2.then(function(res){
    // res.data
    $scope.cateDetail = res.data
  })
 })
