Template.twitch.helpers({
  config: function(){
    Meteor.subscribe("Plugins");
    var twitch = Plugins.findOne({_id:this._id},{fields:{twitch:1}}).twitch;
    return twitch;
  }
});
