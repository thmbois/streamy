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
