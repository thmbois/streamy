Meteor.publish('ircMessages', function(limit,channel) {
    var dl = limit || 10;
    return IRCMessages.find({channel:"#"+channel},
      {
        limit: dl,
        sort: {
          timestamp:-1
        }
      }
    );
});

ChatBot = class ChatBot {
  constructor() {
    // TWITCH CHAT DOCs: http://help.twitch.tv/customer/de/portal/articles/1302780-twitch-irc
    var chatBotSettings = Meteor.settings.twitchChatBot;
    if(chatBotSettings){
      this.channels = [];
      var params = {
          userName: chatBotSettings.userName,
          realName: chatBotSettings.userName,
          password: chatBotSettings.token,
          port: 6667,
          debug: false,
          sasl: true,
          showErrors: false,
          autoRejoin: false,
          autoConnect: false,
          channels: [],
          stripColors: true,
          channelPrefixes: "&#"
      };
      this.client = new irc.Client('irc.twitch.tv',chatBotSettings.userName,params);
      this.client.connect();
      this._enabled = true;
    } else {
      console.log("Settings.json needs twitch token, channelName and userName! Please have a look at the example");
    }
  }
  listen(){
    var self = this;
    this.client.addListener('registered', function (message) {
      //console.log("channels: "+self.channels);
      //join all missed channels
      self.channels.forEach(function(channel) {
        self.client.join(channel);
      });
    });
    this.client.addListener('message',  Meteor.bindEnvironment(function (from, to, message) {
      //console.log(from + ' => ' + to + ': ' + message);
      IRCMessages.insert({
        timestamp:Date.now(),
        message:message,
        channel:to,
        from:from
      });
    }));
  }
  join(channel){
    if(this._enabled){
      console.log("Setting up ChatBot for Channel: "+channel);
      this.channels.push(channel);
      this.client.join(channel);
      //console.log("channels: "+this.channels);
    }else {
      console.log("Can't join Channel");
    }
  }
  stopAllBots(){
    if(this._enabled){
      var self = this;
      self.channels.forEach(function(channel) {
        self.client.part(channel);
      });
      this.channels =[];
    }
  }
}
