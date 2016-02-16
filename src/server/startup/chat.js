// IRC DOCs: https://node-irc.readthedocs.org/en/latest/API.html?highlight=password#client
// TWITCH CHAT DOCs: http://help.twitch.tv/customer/de/portal/articles/1302780-twitch-irc

var chatBotSettings = Meteor.settings.twitchChatBot;

var client = new irc.Client('irc.twitch.tv', chatBotSettings.userName, {
    channels: ['#'+chatBotSettings.channel],
     userName: chatBotSettings.userName,
     password:chatBotSettings.token
});

client.addListener('message', function (from, to, message) {
    console.log(from +': ' + message);
});
