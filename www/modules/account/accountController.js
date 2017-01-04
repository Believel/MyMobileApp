// 首页的控制器
angular.module('account.controller', [])
 .controller('accountController',function(
  $scope,
  $ionicPopup,
  $ionicModal,
  $ionicActionSheet,
  $interval // 类似setInterval
  // $ionicActionSheet
  ){
   // 1.打开actionsheet
   $scope.showActionSheet = function(){
     $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }})
   }
 })
