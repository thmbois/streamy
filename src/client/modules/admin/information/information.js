Meteor.subscribe("BasicInfo");
Template.information.helpers({
  info: function(){
    return BasicInfo.findOne();
  }
});
