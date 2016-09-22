angularapp.controller('newController',function($scope,$location,friendsFactories){
  console.log("entered controller");
  $scope.frndsArr = [];
  friendsFactories.index(function(data){
    $scope.frndsArr = data;
  })

  $scope.newFriend= function(){
    friendsFactories.newFriend($scope.friend,function(){
      console.log("hey");
      $scope.friend ={};
      $location.path('/');
    })
  }

$scope.delete = function(_id){
  friendsFactories.delete(_id,function(){
    console.log("back to delete in ctrl");
  })
}
})
