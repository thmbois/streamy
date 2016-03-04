Meteor.subscribe("Twitter", 1);

var getTweets = function (){
  return Twitter.find({},{
    sort: {
      timestamp:-1
    }
  });
};

Template.twitter.helpers({
  tweets: function(){
    return getTweets();
  }
});
