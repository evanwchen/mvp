angular.module('dayplanner.list', [])

.controller('ListController', function ($scope, $rootScope, Count) {
  $scope.venues = Count.getList();

  $rootScope.$on('addList', function() {
    $scope.venues = Count.getList();
    console.log('$scope.venues: ', $scope.venues);
  });

  $scope.removeFromList = function(index) {
    $scope.venues.splice(index, 1);
  };

  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(40.0000, -98.0000),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();
  
  var createMarker = function (info){
    var marker = new google.maps.Marker({
      map: $scope.map,
      position: new google.maps.LatLng(info.location.lat, info.location.lng),
      title: info.name
    });
    marker.content = '<div class="infoWindowContent">' + info.categories[0].name + '</div>';

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
      infoWindow.open($scope.map, marker);
    });
    
    $scope.markers.push(marker);
  }  
  
  for (i = 0; i < $scope.venues.length; i++){
    createMarker($scope.venues[i]);
  }

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }

});

