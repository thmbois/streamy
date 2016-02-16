// IRC DOCs: https://node-irc.readthedocs.org/en/latest/API.html?highlight=password#client
// TWITCH CHAT DOCs: http://help.twitch.tv/customer/de/portal/articles/1302780-twitch-irc

IRCMessages.remove({});

var chatBotSettings = Meteor.settings.twitchChatBot;

var params = {
  server: 'irc.twitch.tv',
  port: 6667,
  nick: chatBotSettings.userName,
  password: chatBotSettings.token,
  realname: chatBotSettings.userName,
  username: chatBotSettings.userName,
  channels: [chatBotSettings.channels],
  debug: false,
  stripColors: true
};

client = new IRC(params);
client.connect();
