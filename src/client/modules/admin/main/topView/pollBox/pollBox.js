Template.pollBox.helpers({
  latestPoll: function(){
    Meteor.subscribe("Polls");
    var ret = Polls.findOne({},
      {
        sort: {
          timestamp:-1
        }
      }
    );
    // console.log(ret);
    return ret;
  }
});

Template.pollBox.events({
  "click #pollBoxAddPollButton": function(event, template){
    BModals.showNew('addPollModal');
  }
});
