Meteor.publish('ircMessages', function() {
    return IRCMessages.find();
});
