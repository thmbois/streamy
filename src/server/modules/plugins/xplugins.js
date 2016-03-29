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
  var twitterPlugins = Plugins.find({type:"twitter"}, {fields: {configs: 1, type:1}}).fetch();
  twitterWall.stopAllStreams();
  twitterPlugins.forEach(function(element) {
    if (element.configs) {
      var config = element.configs.filter(function (el) {
        return el.config === "twitterHashtag";
      });
      var hashtag = config[0].value;
      twitterWall.start(hashtag);
    }
  });
});

Tracker.autorun(function(){
  var chatPlugins = Plugins.find({type:"chat"}, {fields: {configs: 1, type:1}}).fetch();
  chatBot.stopAllBots();
  chatPlugins.forEach(function(element) {
    if (element.configs) {
      var config = element.configs.filter(function (el) {
        return el.config === "twitchChannel";
      });
      var channel = config[0].value;
      chatBot.join("#"+channel);
    }
  });
});
