var app = angular.module("App",[]);
app.controller("BodyController",["$scope","$http",function($,h){
  $.jokes = [];
  h.get('http://api.icndb.com/jokes/random')
    .success(function(data){
      $.jokes.push(data.value.joke);
    })
    .error(function(e){
      console.log(e);
    });

    $.click = function(){
      h.get('http://api.icndb.com/jokes/random')
        .success(function(data){
          $.jokes.push(data.value.joke);
        })
        .error(function(e){
          console.log(e);
        });
    }
}]);
