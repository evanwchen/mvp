var request = require('request');
var config = require('../../config');

module.exports = {
  exploreVenue: function (req, res, next) {
    var uri = 'https://api.foursquare.com/v2/venues/search?client_id='+config.client_id+'\
&client_secret='+config.client_secret+'\
&v=20160215\
&ll=40.7,-74\
&query=sushi\
&limit=10\
&venuePhotos=1\
&query='+req.query.search;

    request.get({url: uri}, function(err, httpResponse, body) { 
      if (err) { 
        res.status(500).send(err);
      } else {
        res.status(200).send(body);
      }
    });
  },
  explorePhotos: function (req, res, next) {
    var uri = 'https://api.foursquare.com/v2/venues/'+req.query.id+'/photos?client_id='+config.client_id+'\
&client_secret='+config.client_secret+'&v=20160215&limit=5';

    request.get({url: uri}, function(err, httpResponse, body) { 
      if (err) { 
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(JSON.parse(body));
      }
    });
  },

};