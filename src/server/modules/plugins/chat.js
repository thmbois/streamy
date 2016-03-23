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
          userName: chatBotSettings.userName,
          realName: chatBotSettings.userName,
          port: 6667,
          localAddress: null,
          debug: false,
          showErrors: false,
          autoRejoin: false,
          autoConnect: true,
          channels: [],
          stripColors: true,
          channelPrefixes: "&#"
      };

      this.client = irc.client('irc.twitch.tv',chatBotSettings.userName,params);
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
