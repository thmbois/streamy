// Session.setDefault("currentBox", 0);
// var countdown = new ReactiveCountdown(20, {
//   // Callback: Complete, called when the countdown has reached 0
//   completed: function() {
//     //console.log(new Date().toString()+": Reset");
//     var currentBox = Session.get("currentBox");
//     var count;
//     if(currentBox<InfoBoxes.find().count()-1){
//       count = currentBox+1;
//     }else{
//       count = 0;
//     }
//     Session.set("currentBox", count);
//     countdown.start();
//   }
// });
//
// countdown.start();
//
// Template.camarea.helpers({
//   InfoBoxes: function(){
//     return InfoBoxes.find();
//   },
//   CamActive: function(){
//     return Controller.findOne().config.camActive;
//   }
// });
//
// Template.infobox.helpers({
//   active: function(){
//     return Session.equals("currentBox", this.boxNumber);
//   }
// });
