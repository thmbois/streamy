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
    var configs = Plugins.findOne({_id:this._id},{fields:{configs:1}}).configs;
    var config = configs.filter(function (el) {
      return el.config === "twitterHashtag";
    });
    var hashtag = config[0].value;
    //console.log("Hashtag: ", hashtag, "ID: ", this._id);
    return getTweets(hashtag);
  }
});
