/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Plugins */

Meteor.publish('Plugins', function() {
    return Plugins.find();
});

// Clients may insert, update, or remove plugins only if an admin user is logged in
Plugins.permit(['insert', 'update', 'remove']).ifHasRole({role: 'admin', group: 'default-group'}).apply();

let chatBot = new ChatBot();
chatBot.listen();
let twitterWall = new TwitterWall();

Tracker.autorun(function(){
  var twitterPlugins = Plugins.find({type:"twitter"}, {fields: {twitter: 1, type:1}}).fetch();
  twitterWall.stopAllStreams();
  twitterPlugins.forEach(function(element) {
    if (element.twitter) {
      var hashtag = element.twitter.hashtag;
      twitterWall.start(hashtag);
    }
  });
});

Tracker.autorun(function(){
  var chatPlugins = Plugins.find({type:"chat"}, {fields: {chat: 1, type:1}}).fetch();
  chatBot.stopAllBots();
  chatPlugins.forEach(function(element) {
    if (element.chat) {
      var channel = element.chat.channel;
      chatBot.join("#"+channel);
    }
  });
});
