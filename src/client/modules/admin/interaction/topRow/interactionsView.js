Template.interactionsView.helpers({
  tasks: function(){
    return getInteractions('task');
  },
  links: function(){
    return getInteractions('link');
  },
  questions: function(){
    return getInteractions('question');
  }
});

function getInteractions(type){
	Meteor.subscribe("Interaction");
	var interaction=Interaction.find({
    	type:type
    },{
    	sort:{
    		timestamp:-1
    	}
    });
	if(interaction.count()>0){
		return interaction;
	}else{
		return false;
	}
}
