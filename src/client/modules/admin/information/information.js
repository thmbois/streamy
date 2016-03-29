Template.information.helpers({
  info: function(){
    Meteor.subscribe("BasicInfo");
    return BasicInfo.findOne();
  }
});
