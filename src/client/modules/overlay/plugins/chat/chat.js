

var getIRCMessages = function (channel){
  Meteor.subscribe("ircMessages", 9,channel);
  return IRCMessages.find({channel:"#"+channel},{
    sort: {
      timestamp:-1
    }
  });
};

Template.chat.helpers({
  channel: function () {
    var configs = Plugins.findOne({_id:this._id},{fields:{configs:1}}).configs;
    var config = configs.filter(function (el) {
      return el.config === "twitchChannel";
    });
    var channel = config[0].value;
    return channel;
  },
  chat: function(){
    var configs = Plugins.findOne({_id:this._id},{fields:{configs:1}}).configs;
    var config = configs.filter(function (el) {
      return el.config === "twitchChannel";
    });
    var channel = config[0].value;
    return getIRCMessages(channel);
  },
  count: function(){
    var configs = Plugins.findOne({_id:this._id},{fields:{configs:1}}).configs;
    var config = configs.filter(function (el) {
      return el.config === "twitchChannel";
    });
    var channel = config[0].value;
    return getIRCMessages(channel).count();
  },
  counterPlusOne:  function(){
    var configs = Plugins.findOne({_id:this._id},{fields:{configs:1}}).configs;
    var config = configs.filter(function (el) {
      return el.config === "twitchChannel";
    });
    var channel = config[0].value;
    return getIRCMessages(channel).count()+1;
  }
});
