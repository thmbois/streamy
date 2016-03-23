Meteor.publish('ircChannels', function() {
    return IRCChannels.find();
});
Meteor.publish('ircConnections', function() {
    return IRCConnections.find();
});
Meteor.publish('ircLinks', function() {
    return IRCLinks.find();
});
Meteor.publish('ircMessages', function(limit) {
    var dl = limit || 10;
    return IRCMessages.find({},
      {
        limit: dl,
        sort: {
          date_time:-1
        }
      }
    );
});

ChatBot = class ChatBot {
  constructor() {
    // TWITCH CHAT DOCs: http://help.twitch.tv/customer/de/portal/articles/1302780-twitch-irc
    var chatBotSettings = Meteor.settings.twitchChatBot;
    if(chatBotSettings){
      var params = {
        server: 'irc.twitch.tv',
        port: 6667,
        nick: chatBotSettings.userName,
        password: chatBotSettings.token,
        realname: chatBotSettings.userName,
        username: chatBotSettings.userName,
        channels: [],
        debug: false,
        stripColors: true
      };

      this.client = new IRC(params);
      this.client.connect();
      this._enabled = true;
    } else {
      console.log("Settings.json needs twitch token, channelName and userName! Please have a look at the example");
    }
  }
  join(channel){
    if(this._enabled){
      this.client.join(channel);
    }
  }
  stopAllBots(){
    if(this._enabled){
      this.client.disconnect("");
    }
  }
}
