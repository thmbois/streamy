Template.navPollResult.helpers({
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

Template.navPollResult.events({
  "click #navPollAddPollButton": function(event, template){
    BModals.showNew('addPollModal');
  }
});
