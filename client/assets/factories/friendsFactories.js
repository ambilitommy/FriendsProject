angularapp.factory('friendsFactories',function($http){
  factory = {};
  var friends =[];
  factory.index = function(callback){
    console.log("entered factory");
    $http.get('/friends').then(function(returnedArrObj){
      console.log("back to factory after getting data");
      //console.log(returnedArrObj.data);
      friends = returnedArrObj.data.data; //1st data is{data:friends} ..2nd is inside friends their is data
      callback(friends);
    })
  }

  factory.newFriend = function(frndtoadd,callback){
    console.log("A new friend to add");
    $http.post('/friends',frndtoadd).then(function(returnedObj){
    })
    callback();
  }

  factory.delete = function(_id,callback){
    console.log("Friends to delete");
    $http.delete('/friends/'+_id).then(function(returnedObj){
    })
    callback();
  }

  return factory;
})
