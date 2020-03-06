/****************************
Reading Hhome.json
****************************/
app.factory('homeContent', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('json/home.json', {cache:true}).success(function(data) {
          callback(data);
        });
      }
    };
  }]);
