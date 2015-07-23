var app = angular.module('Mean', [
  'ui.router',
  'ngSanitize',
  'angular-flash.service',
  'angular-flash.flash-alert-directive',
  'ui.bootstrap',
  'appModal',
  'appRoutes',
  'appDirectives',
  'appFilters',
  'appServices',
  'baseCtrl',
  'postCtrl',
  'postService'
]);

app.config(['flashProvider', function (flashProvider) {

  flashProvider.errorClassnames.push('alert-danger');
  flashProvider.warnClassnames.push('alert-warning');
  flashProvider.infoClassnames.push('alert-info');
  flashProvider.successClassnames.push('alert-success');

}]);