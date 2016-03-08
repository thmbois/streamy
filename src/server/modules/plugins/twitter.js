Meteor.publish('Twitter', function(limit) {
    var dl = limit || 10;
    return Twitter.find({},
      {
        limit: dl,
        sort: {
          timestamp:-1
        }
      }
    );
});
