Template.pollsResults.helpers({
  polls: function(){
    var polls = Polls.find({users:  { $in: [Meteor.userId()] }});
    if(polls.count()>0){
            return polls;
    }
    else {
      return false;
    }
  }
});
