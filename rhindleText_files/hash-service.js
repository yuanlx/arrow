/**
 * @fileoverview A simple service to store the settings and update the hash.
 */
angular.module('sandbox').factory('hashService', function($http, $location) {
  function getKey(url) {
    return url.match(/key=(.*)/)[1];
  }
  function getKeyFromQuery() {
    var query = document.location.search;
    var keyMatch = query.match(/\?hash=(.*)/);
    var key = (keyMatch && keyMatch[1]) || null;
    return key;
  }

  function getSettings(key) {
    console.log('Fetching settings with key', key);
    return $http.get('/snippet?key=' + key);
  };

  return {
    // Yuk. cyclic dependency.
    init: function(scope) {
      var key = getKeyFromQuery();
      if (key) {
        getSettings(key).success(function(data) {
          scope.setData(data);
        });
      }
      window.addEventListener('popstate', function(e) {
        if (e.state) {
          scope.$apply(function() {
            scope.setData(e.state);
          });
        }
      }, false);
    },
    sendData: function(data) {
      $http.post('/snippet?prefix=sandbox', data)
          .success(function(data, status, headers) {
        var locationHeader = headers()['location'];
        console.log('Received', data, status, locationHeader);
        $location.search('hash', getKey(locationHeader));
        $location.state(angular.copy(data));
      });
    }
  };
});
