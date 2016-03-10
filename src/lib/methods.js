Meteor.methods({
  vote: function (id,answers) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    var poll = Polls.findOne({_id:id, users:  { $nin: [this.userId] }});
    if (!poll) {
      throw new Meteor.Error("you-already-voted");
    }
    if (!poll.allowMultipleAnswers) {
      if (answers.length > 1) {
        throw new Meteor.Error("dont-vote-for-multiple");
      }
    }
    answers.forEach(function(answer) {
      Polls.update(
        {
          '_id': id,
          'answers.text': answer
        },
        {
          $addToSet:{ users: Meteor.userId()},
          $inc:{
              'answers.$.count': 1
          }
        }
      );
    });
  }
});
