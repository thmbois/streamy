// DOCUMENTATION: https://github.com/ttezel/twit - https://atmospherejs.com/schiller/twit
//var twitterAuth = Meteor.settings.twitterWall;
if(true){
  // T = new Twit({
  //   consumer_key: twitterAuth.consumer_key,
  //   consumer_secret: twitterAuth.consumer_secret,
  //   access_token: twitterAuth.access_token,
  //   access_token_secret: twitterAuth.access_token_secret
  // });
    Twitter.remove({});
} else {
  console.log("Settings.json needs twitter keys and secrets! Please have a look at the example");
}
