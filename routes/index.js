
/*
 * GET home page.
 */
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'C6hwEaqAjLlZZjir6v3dQ'
  , consumer_secret:      'xjkLJ0h6daPWPQISQOEdClUgk4V8iaT3mRva3uBGc9g'
  , access_token:         '248137018-s7oahvxNYEuIyUX9lfwBblDrtmpQ6p7mKGlL9eVj'
  , access_token_secret:  'oqsYW9FRBnfREn9ekFrI5WG56ViSDeutCOeU9MI'
});

exports.index = function(req, res){
    var users = [];
    var tweets = [];
    var created_at = [];
    T.get('search/tweets', { q: '@mhmmdhsby', since: '2012-09-01' }, function(err, reply) {
      for(var i=0;i<reply.statuses.length;i++){
          users[i] = reply.statuses[i].user;
          tweets[i] = reply.statuses[i].text;
          created_at[i] = reply.statuses[i].created_at;
      }
      res.render('index', { title: 'Tweest', user: users, tweet:tweets, created:created_at });
    });
     
};