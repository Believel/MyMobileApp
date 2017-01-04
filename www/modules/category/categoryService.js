angular.module('category.service', [])
 .service('cyService',function($http){

  // 1.分类数据
   this.getCategoryList = function(){
     // 1.发ajax请求，得到分类列表数据
   // *注意*：请求的路径也是相对于www目录
   return $http.get('modules/category/01.categoryList.json')
   }

   // 2.获取分类的详细数据,是根据分类的id得到具体的分类数据
  this.getDetail=function(id){
    return $http.get('modules/category/02.categoryDetail.json')
  }
 })