Meteor.subscribe("Info");

Template.info.created = function(){
  // counter starts at 0
  this.state = new ReactiveDict();
  var state = this.state;
  state.set('plugin_id', Template.instance().parent().data.data._id);
  state.set('activeInfo', 1);

  var countdownInfo = new ReactiveCountdown(20, {
    // Callback: Complete, called when the countdown has reached 0
    completed: function() {
      var counter = state.get('activeInfo');
      if(counter<Info.find({plugin_id:state.get('plugin_id')}).count()){
        counter ++;
      }else{
        counter = 1;
      }
      state.set('activeInfo',counter);
      countdownInfo.start();
    }
  });
  countdownInfo.start();
};

Template.info.helpers({
  info: function(){
    return Info.find({plugin_id:Template.instance().state.get('plugin_id')});
  }
});

Template.infoItem.helpers({
  active: function(){
    return Template.instance().parent().state.equals('activeInfo',this.order) ;
  }
});
