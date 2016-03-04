var twitterAuth = Meteor.settings.twitterWall;
if(twitterAuth){
  //IRCMessages.remove({});
  /*var consumer_key = twitterAuth.consumer_key;
  var consumer_secret = twitterAuth.consumer_secret;
  var access_token = twitterAuth.access_token;
  var access_token_secret = twitter.access_token_secret;*/

  var T = new Twit({
    consumer_key: twitterAuth.consumer_key,
    consumer_secret: twitterAuth.consumer_secret,
    access_token: twitterAuth.access_token,
    access_token_secret: twitterAuth.access_token_secret
  });

  // T.get('search/tweets', { q: 'twitch since:2014-01-01', count: 1 }, function(err, data, response) {
  //   console.log(data.statuses[0].text);
  // });

  T.get('users/show', { screen_name: 'flexzuu' },  function (err, data, response) {
    console.log(data.id);
  })

  var stream = T.stream('statuses/filter', { track: '#Fessenheim' })

  stream.on('tweet', function (tweet) {
    console.log("Tweet: " + tweet.text + " from " + tweet.user.screen_name);
  })

  // var stream = T.stream('statuses/filter', { track: 'mango' })
  //
  // stream.on('tweet', function (tweet) {
  //   console.log(tweet)
  // })

  // Meteor.methods({
  //   sendChatMessage:function(channel,message){
  //     client.say(channel,message);
  //   }
  // });
}else {console.log("Fail!")}
