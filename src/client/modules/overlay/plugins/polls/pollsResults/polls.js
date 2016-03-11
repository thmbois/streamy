Template.polls.helpers({
  latestPoll: function(){
    var polls = Polls.findOne({},
      {
        limit: 1,
        sort: {
          timestamp:-1
        }
      });
    return polls;
  }
});
