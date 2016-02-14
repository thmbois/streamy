Session.setDefault("activeInfo", 0);

var countdownInfo = new ReactiveCountdown(20, {
  // Callback: Complete, called when the countdown has reached 0
  completed: function() {
    //console.log(new Date().toString()+": Reset");
    var activeInfo = Session.get("activeInfo");
    var count;
    if(activeInfo<Info.find().count()-1){
      count = activeInfo+1;
    }else{
      count = 0;
    }
    Session.set("activeInfo", count);
    countdownInfo.start();
  }
});

countdownInfo.start();

Template.info.helpers({
  info: function(){
    return Info.find();
  }
});

Template.infoItem.helpers({
  active: function(){
    return Session.equals("activeInfo", this.infoNumber);
  }
});
