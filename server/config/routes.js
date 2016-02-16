var helpers = require('./helpers.js');
var venueController = require('../venues/venueController');

module.exports = function (app, express) {
  // app.get('/:code', linksController.navToLink);

  // app.post('/api/users/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  app.get('/api/explore/venue', venueController.explore);
  app.get('/api/explore/photos', venueController.photos);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

