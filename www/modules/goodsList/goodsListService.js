angular.module('goodsList.services', [])
  .service('glServices',function($http){

    // 1.ajax获取联具体的商品列表
    this.getGoodsList=function(){
     return   $http.get('modules/goodsList/03.goodsList.json')
    }

    // 2.更新数据
    this.getNewData = function(){

      return $http.get('modules/goodsList/03.goodsList.json')
    }

    // 3.得到更数据,类似分页的效果
    this.getMoreData = function(){
      // http://www.itcast.cn/home/list
      return $http.get('modules/goodsList/03.goodsList.json')
    }
  })