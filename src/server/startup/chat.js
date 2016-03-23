// TWITCH CHAT DOCs: http://help.twitch.tv/customer/de/portal/articles/1302780-twitch-irc
var chatBotSettings = Meteor.settings.twitchChatBot;
if(chatBotSettings){
  IRCMessages.remove({});
  //
  // var params = {
  //   server: 'irc.twitch.tv',
  //   port: 6667,
  //   nick: chatBotSettings.userName,
  //   password: chatBotSettings.token,
  //   realname: chatBotSettings.userName,
  //   username: chatBotSettings.userName,
  //   channels: [chatBotSettings.channels],
  //   debug: false,
  //   stripColors: true
  // };
  //
  // client = new IRC(params);
  // client.connect();
} else {
  console.log("Settings.json needs twitch token, channelName and userName! Please have a look at the example");
}
