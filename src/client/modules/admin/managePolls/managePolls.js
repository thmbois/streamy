Template.managePolls.helpers({
  activePolls: function(){
    return getPolls(false);
  },
  inActivePolls: function(){
    return getPolls(true);
  }
});

function getPolls(inActivePolls) {
  Meteor.subscribe("Polls", inActivePolls);
  var polls = Polls.find(
    {
      active:!inActivePolls
    },{
      sort: {
        timestamp:-1
      }
    }
  );
  if (polls.count()>0) {
    return polls;
  }
  return false;
}
