var helpers = require('./helpers.js');
var venueController = require('../venues/venueController');

module.exports = function (app, express) {
  // app.get('/:code', linksController.navToLink);

  // app.post('/api/users/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  // // authentication middleware used to decode token and made available on the request
  // // app.use('/api/links', helpers.decode);
  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler

  app.get('/api/explore', venueController.explore);
  // app.post('/api/explore', venueController.explore);


  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

