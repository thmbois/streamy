Template.userPolls.helpers({
  polls: function(){
    var polls = Polls.find({users:  { $nin: [Meteor.userId()] }});
    if(polls.count()>0){
            return polls;
    }
    else {
      return false;
    }
  }
});

Template.userPoll.events({
  "submit": function(event, template){
     event.preventDefault();
    var answers = [];
    $('input[name=answer'+template.data._id+']:checked').each(function() {
      answers.push($(this)[0].nextElementSibling.innerText);
    });
    Meteor.call("vote", template.data._id, answers, function(error){
      if(error){
        console.log("error", error);
      }
    });
  }
});
