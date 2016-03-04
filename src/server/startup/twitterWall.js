// DOCUMENTATION: https://github.com/ttezel/twit - https://atmospherejs.com/schiller/twit
var twitterAuth = Meteor.settings.twitterWall;
if(twitterAuth){
  Twitter.remove({});

  var T = new Twit({
    consumer_key: twitterAuth.consumer_key,
    consumer_secret: twitterAuth.consumer_secret,
    access_token: twitterAuth.access_token,
    access_token_secret: twitterAuth.access_token_secret
  });

  // T.get('search/tweets', { q: 'twitch since:2014-01-01', count: 1 }, function(err, data, response) {
  //   console.log(data.statuses[0].text);
  // });

  // T.get('users/show', { screen_name: 'flexzuu' },  function (err, data, response) {
  //   console.log(data.id);
  // })

  var stream = T.stream('statuses/filter', { track: twitterAuth.hashtag })

  stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
    var tweetData = {
      text: tweet.text,
      createdAt: new Date(tweet.created_at),
      timestamp: new Date(tweet.created_at).getTime(),
      user: tweet.user
    };
    // console.log("Tweet: " + tweet.text + " from " + tweet.user.screen_name);
    // console.log(tweetData);
    Twitter.insert(tweetData);

  }))


  // Meteor.methods({
  //   sendChatMessage:function(channel,message){
  //     client.say(channel,message);
  //   }
  // });
} else {console.log("Settings.json needs twitter keys and secrets! Please have a look at the example")};
