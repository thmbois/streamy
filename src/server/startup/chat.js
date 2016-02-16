var chatBotSettings = Meteor.settings.twitchChatBot;

var client = new irc.Client('irc.twitch.tv', chatBotSettings.userName, {
    channels: ['#'+chatBotSettings.channel],
     userName: chatBotSettings.userName,
     password:chatBotSettings.token
});

client.addListener('message', function (from, to, message) {
    console.log(from +': ' + message);
});
