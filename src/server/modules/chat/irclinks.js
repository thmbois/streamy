Meteor.publish('ircLinks', function() {
    return IRCLinks.find();
});
