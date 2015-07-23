angular.module('appFilters', [])
.filter('unsafe',['$sce',function($sce) {
	return function(val) {
	    return $sce.trustAsHtml(val);
	};
}])
.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  };
});