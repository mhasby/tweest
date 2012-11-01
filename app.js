
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

var OAuth= require('oauth').OAuth;

var oAuth= new OAuth(
  "http://twitter.com/oauth/request_token",
  "http://twitter.com/oauth/access_token", 
  "C6hwEaqAjLlZZjir6v3dQ", "xjkLJ0h6daPWPQISQOEdClUgk4V8iaT3mRva3uBGc9g", 
  "1.0A", null, "HMAC-SHA1"
);

oAuth.post(
  "http://api.twitter.com/1/statuses/update.json",
  "248137018-s7oahvxNYEuIyUX9lfwBblDrtmpQ6p7mKGlL9eVj", "oqsYW9FRBnfREn9ekFrI5WG56ViSDeutCOeU9MI",
  {"status":"Hello World!"},
  function(error, data) {
    if(error) console.log(require('sys').inspect(error))
    else console.log(data)
  }
);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
