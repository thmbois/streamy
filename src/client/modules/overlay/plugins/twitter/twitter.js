var getTweets = function (hashtag){
  Meteor.subscribe("Twitter", 1, hashtag);
  return Twitter.find({hashtag:hashtag},{
    sort: {
      timestamp:-1
    }
  });
};

Template.twitter.helpers({
  tweets: function(){
    Meteor.subscribe("Plugins");
    var twitterConfig = Plugins.findOne({_id:this._id},{fields:{twitter:1}}).twitter;
    var hashtag = twitterConfig.hashtag;
    //console.log("Hashtag: ", hashtag, "ID: ", this._id);
    return getTweets(hashtag);
  }
});
