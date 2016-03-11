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
  "submit .answers": function(event, template){
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
  },
  "click .addNewAnswerButton": function(event, template){
    newAnswer(event,template);
  },
  "keypress .addNewAnswerInput": function(event, template){
    if (event.which === 13) {
      newAnswer(event,template);
    }
  }
});

function newAnswer(event,template) {
  event.preventDefault();
  var answer = template.find(".addNewAnswerInput").value;
  if (answer) {
    Meteor.call("addAnswer", template.data._id, answer, function(error){
      if(error){
        console.log("error", error);
      }
    });
    // console.log("new Answer "+answer+" added");
    template.find(".addNewAnswerInput").value = "";
  }
}
