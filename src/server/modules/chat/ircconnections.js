Meteor.publish('ircConnections', function() {
    return IRCConnections.find();
});
