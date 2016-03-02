
Template.customizeEditPlugins.helpers({
  plugins: function(){
    return Plugins.find({});
  },
  infos: function(plugin_id){
    return Info.find({plugin_id:plugin_id});
  }
});
