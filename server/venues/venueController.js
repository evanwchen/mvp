var request = require('request');
var config = require('../../config');

module.exports = {
  explore: function (req, res, next) {
    var uri = 'https://api.foursquare.com/v2/venues/search?client_id='+config.client_id+'\
&client_secret='+config.client_secret+'\
&v=20130815\
&ll=40.7,-74\
&query=sushi\
&limit=5\
&venuePhotos=1';

    request.get({url: uri}, function(err, httpResponse, body) { 
      if (err) { 
        res.status(500).send(err);
      } else {
        console.log('body', body);
        res.status(200).send(body);
      }
    });
  }
};