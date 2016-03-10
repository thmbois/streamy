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
    }
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
