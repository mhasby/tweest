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