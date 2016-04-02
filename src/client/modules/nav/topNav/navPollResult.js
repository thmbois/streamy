Template.navPollResult.helpers({
  latestPoll: function(){
    Meteor.subscribe("Polls");
    var polls = Polls.findOne({
      active:true
    },
      {
        limit: 1,
        sort: {
          timestamp:-1
        }
      });
    return polls;
  }
});

Template.navPollResult.events({
  "click #navPollAddPollButton": function(event, template){
    BModals.showNew('addPollModal');
  }
});
