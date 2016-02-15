Template.info.created = function(){
  // counter starts at 0
  this.state = new ReactiveDict();
  this.state.set('activeInfo', 0);
  var state = this.state;
  var countdownInfo = new ReactiveCountdown(10, {
    // Callback: Complete, called when the countdown has reached 0
    completed: function() {
      var counter = state.get('activeInfo');
      if(counter<Info.find({plugin_id:"EF3YgaGqn3XbdA3vg"}).count()){
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
    return Info.find({plugin_id:"EF3YgaGqn3XbdA3vg"});
  }
});

Template.infoItem.helpers({

  active: function(){
    //console.log(this.text+": "+(Template.instance().parent().state.get('activeInfo')==this.infoNumber));
    console.log(Template.instance().parent().state.get('activeInfo'));
    return Template.instance().parent().state.equals('activeInfo',this.order) ;
  }
});
