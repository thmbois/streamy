Meteor.methods({
  vote: function (id,answers) {
    // Make sure the user is logged in
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    var poll = Polls.findOne({_id:id, users:  { $nin: [this.userId] }});
    if (!poll) {
      throw new Meteor.Error("already-voted");
    }
    if (!poll.allowMultipleAnswers) {
      if (answers.length > 1) {
        throw new Meteor.Error("not-allowed-vote-multiple");
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
  },
  addAnswer: function (id,answer) {
    // Make sure the user is logged in
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    var poll = Polls.findOne({_id:id, users:  { $nin: [this.userId] }});
    if (!poll) {
      throw new Meteor.Error("already-voted");
    }
    if (!poll.allowAddAnswers) {
        throw new Meteor.Error("not-allowed-add-answers");
    }
    var newAnswer = {
      text: answer,
      count: 0
    };
    Polls.update(
      {
        '_id': id,
      },
      {
        $addToSet:{ answers: newAnswer}
      }
    );
  }
});
