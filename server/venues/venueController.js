var request = require('request');
var config = require('../../config');

module.exports = {
  explore: function (req, res, next) {
    var uri;
    if (req.query.section === undefined) {
      uri = 'https://api.foursquare.com/v2/venues/search?client_id='+config.client_id+'\
  &client_secret='+config.client_secret+'\
  &v=20160215\
  &limit=10\
  &query='+req.query.search+'\
  &near='+req.query.near;
    } else {
      uri = 'https://api.foursquare.com/v2/venues/search?client_id='+config.client_id+'\
  &client_secret='+config.client_secret+'\
  &v=20160215\
  &limit=10\
  &section='+req.query.section+'\
  &near='+req.query.near;
    }

    request.get({url: uri}, function(err, httpResponse, body) { 
      if (err) { 
        res.status(500).send(err);
      } else {
        res.status(200).send(body);
      }
    });
  },
  photos: function (req, res, next) {
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