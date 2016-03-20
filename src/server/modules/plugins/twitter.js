Meteor.publish('Twitter', function(limit,hashtag) {
    var dl = limit || 10;
    return Twitter.find({
      hashtag:hashtag
    },
      {
        limit: dl,
        sort: {
          timestamp:-1
        }
      }
    );
});
TwitterWall = class TwitterWall {
  constructor() {
    var twitterAuth = Meteor.settings.twitterWall;
    this.streams = [];
    this._enabled = true;
    this.T = new Twit({
      consumer_key: twitterAuth.consumer_key,
      consumer_secret: twitterAuth.consumer_secret,
      access_token: twitterAuth.access_token,
      access_token_secret: twitterAuth.access_token_secret
    });
  }
  start(hashtag){
    var stream = this.T.stream('statuses/filter', { track: hashtag });
    this.streams.push(stream);
    var self = this;
    console.log("Setting up Twitter for Hashtag: "+hashtag);
    stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
      if(self._enabled){
        var tweetData = {
          text: tweet.text,
          createdAt: new Date(tweet.created_at),
          timestamp: new Date(tweet.created_at).getTime(),
          user: tweet.user,
          hashtag: hashtag
        };
        //console.log(tweetData);
        Twitter.insert(tweetData);
      }
    }));
  }
  stopAllStreams(){
    this.streams.forEach(function(stream) {
      stream.stop();
    });
    this.streams =[];
  }
}
