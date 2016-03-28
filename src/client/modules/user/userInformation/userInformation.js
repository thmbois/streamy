Template.userInformation.helpers({
  info: function(){
    Meteor.subscribe("BasicInfo");
    return BasicInfo.findOne();
  }
});
