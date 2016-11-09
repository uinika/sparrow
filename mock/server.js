const Express = require('express'),
      App = Express(),
      Cors = require('cors'),
      BodyParser = require('body-parser'),
      Middleware = require('./common/middleware.js'),
      Color = require('colors/safe');

/** Middlewares */
App.use('/test', Express.static('./artifact'));
App.use('/build', Express.static('./build'));
App.use(Cors({
  origin: 'http://localhost:5006',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 1728000
}));
App.use(BodyParser.json());
App.use('/', (request, response, next) => {
  Middleware.log(request, response);
  next();
});
App.listen(5002);

/* Informations */
console.info(Color.blue('Build started on http://localhost:5002/build'));
console.info(Color.blue('Livereload started on http://localhost:5001'));
console.info(Color.blue('Test started on http://localhost:5002/test'));

/** Routers */
App.use('/', require('./login/api'));
