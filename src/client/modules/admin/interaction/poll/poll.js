Template.poll.helpers({
  latestPoll: function(){
    Meteor.subscribe("Polls");
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

Template.poll.events({
  "click #pollAddPollButton": function(event, template){
    BModals.showNew('addPollModal');
  }
});
