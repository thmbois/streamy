var getIRCMessages = function (chatConfig){
  var channel = chatConfig.channel;
  Meteor.subscribe("ircMessages", chatConfig.maxMessages,channel);
  return IRCMessages.find({channel:"#"+channel},{
    sort: {
      timestamp:-1
    }
  });
};

Template.chat.helpers({
  channel: function () {
    Meteor.subscribe("Plugins");
    var chatConfig = Plugins.findOne({_id:this._id},{fields:{chat:1}}).chat;
    return chatConfig.channel;
  },
  chat: function(){
    Meteor.subscribe("Plugins");
    var chatConfig = Plugins.findOne({_id:this._id},{fields:{chat:1}}).chat;
    return getIRCMessages(chatConfig);
  },
  count: function(){
    Meteor.subscribe("Plugins");
    var chatConfig = Plugins.findOne({_id:this._id},{fields:{chat:1}}).chat;
    return getIRCMessages(chatConfig).count();
  },
  counterPlusOne:  function(){
    Meteor.subscribe("Plugins");
    var chatConfig = Plugins.findOne({_id:this._id},{fields:{chat:1}}).chat;
    return getIRCMessages(chatConfig).count()+1;
  }
});
