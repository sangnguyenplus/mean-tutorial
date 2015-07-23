angular.module('postService', [])
.factory('Post',['$http', function($http) {
    return {
        get : function(){
            return $http.get('/api/post/list');
        },
        create : function(formData) {
            return $http.post('/api/post/create', formData);
        },
        detail : function(id){
            return $http.get('api/post/detail/'+ id);
        },
        delete : function(id){
            return $http.delete('/api/post/delete/'+ id);
        },
        edit : function(formData) {
            return $http.post('/api/post/edit', formData);
        }
    };
}]);