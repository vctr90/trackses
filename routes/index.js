const express = require('express');

const router = express.Router();
const mountAuthenticationRoutes = require('./authentication/');
const RoutesHandler = require('./routesHandler.js');
const passport = require('../modules/passport.js');

const baseApiUrl = '/api';
const whitelistedPaths = [
  '/api/authentication/login',
  '/api/authentication/sign-up'
];
const routesHandler = new RoutesHandler({
  router,
  baseApiUrl
});

const jwtStrategy = passport.authenticate('jwt', {
  session: false
});

router.use(`${baseApiUrl}/*`, RoutesHandler.unless({
  whitelistedPaths,
  whitelistedMiddleware: jwtStrategy
}));

routesHandler.mountRoute({ mountRouteCallback: mountAuthenticationRoutes, mainRouteUrl: '/authentication' });

module.exports = router;
