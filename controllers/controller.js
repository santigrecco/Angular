var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
  $scope.comments= [{
      comment: "great video",
      username: "everybody"
    },
    {
      comment: "simply horrible",
      username: "nobody"
    }
  ];
  $scope.addComment =  function(){
    $scope.comments.push({
      comment: $scope.comment,
      username: $scope.name
    });
    $scope.comment ='';
    $scope.name = '';
  }
});
