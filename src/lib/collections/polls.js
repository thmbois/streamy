Polls = new Mongo.Collection("Polls");

Answer = new SimpleSchema({
  text: {
    type: String,
    max: 200
  },
  count: {
    type: Number,
    defaultValue:0,
    autoform: {
      omit:true
    },
    optional:true
  }
});


Polls.attachSchema({
  question: {
    type: String,
    max: 200
  },
  icon:{
    type: String,
    regEx: /fa-[a-z]+/,
    optional: true
  },
  answers: {
    type: [Answer]
  },
  allowAddAnswers:{
    type: Boolean,
    defaultValue: false
  },
  allowMultipleAnswers:{
    type: Boolean,
    defaultValue: false
  },
  active:{
  	type: Boolean,
    defaultValue: true,
    autoform: {
      omit:true
    }
  },
  timestamp:{
    type: Number,
    autoValue: function () {
      if (this.isInsert) {
        return new Date().getTime();
      }
    },
    autoform: {
      omit:true
    }
  },
  users:{
    type: [String],
    autoform: {
      omit:true
    },
    optional: true
  }
});

Polls.helpers({
  votes: function() {
  	var votes = 0;
  	this.answers.forEach(function(answer) {
    		votes+=answer.count;
  	});
    return votes;
  }
});

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
        $addToSet:{
          answers: newAnswer
        }
      }
    );
  },
  togglePoll: function (id) {
    // Make sure the user is logged in and admin
    var loggedInUser = this.userId;
    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], 'default-group')) {
      throw new Meteor.Error("not-authorized");
    }
    var poll = Polls.findOne({_id:id});
    if(poll){
      Polls.update(
        {
          '_id': id,
        },
        {
          $set:{
            active: !poll.active
          }
        }
      );
    }else {
      throw new Meteor.Error("can't-find-poll");
    }
  },
  deletePoll: function (id) {
    // Make sure the user is logged in and admin
    var loggedInUser = this.userId;
    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], 'default-group')) {
      throw new Meteor.Error("not-authorized");
    }
    var poll = Polls.findOne({_id:id});
    if(poll){
      if(!poll.active){
        Polls.remove({_id:id});
      } else {
        throw new Meteor.Error("can't-delete-active-polls");
      }
    }else {
      throw new Meteor.Error("can't-find-poll");
    }
  }
});
