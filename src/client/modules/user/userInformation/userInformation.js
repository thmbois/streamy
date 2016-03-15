Template.userInformation.helpers({
  info: function(){
    return BasicInfo.findOne();
  }
});
