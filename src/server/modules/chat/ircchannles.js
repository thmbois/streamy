Meteor.publish('ircChannels', function() {
    return IRCChannels.find();
});
