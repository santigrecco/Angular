var app = angular.module("App",[]);
app.controller("BodyController",["$scope","$http",function($,h){
  $.games;
  h.get('http://138.68.50.100/search/fifa')
    .success(function(data){
      $.game = data;
    })
    .error(function(e){
      console.log(e);
    });


}]);
