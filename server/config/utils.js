var config = require('../config');

module.exports = {
  foursqExplore: function (url) {
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search?client_id='+config.client_id+'\
&client_secret='+config.client_secret+'\
&v=20130815\
&ll=40.7,-74\
&query=sushi\
&limit=5\
&venuePhotos=1'
  });
};