
var getIRCMessages = function (){
  return IRCMessages.find({},{
    sort: {
      date_time:-1
    }
  });
};

Template.chat.helpers({
  chat: function(){
    return getIRCMessages();
  },
  count: function(){
    return getIRCMessages().count();
  },
  counterPlusOne:  function(){
    return getIRCMessages().count()+1;
  }
});
