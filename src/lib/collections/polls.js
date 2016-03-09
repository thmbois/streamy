Polls = new Mongo.Collection("Polls");

Answer = new SimpleSchema({
  text: {
    type: String,
    max: 200,
	min: 3
  },
  count: {
    type: Number
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
  active:{
  	type: Boolean
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
