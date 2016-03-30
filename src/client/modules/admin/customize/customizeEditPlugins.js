Template.customizeEditPlugins.helpers({
  plugins: function(){
    Meteor.subscribe("Plugins");
    return Plugins.find({},{
      sort: {
        type:-1
      }
    });
  },
  infos: function(plugin_id){
    Meteor.subscribe("Info");
    return Info.find({plugin_id:plugin_id});
  },
    onError: function () {
      return function (error) {
        toastr.error("","Error on delete." );
      };
    },
    onSuccess: function () {
      return function (result) {
        toastr.success("", "Item deleted.");
      };
    },
    beforeRemove: function () {
      return function (collection, id) {
        var context = this;
        var bModal = BModals.showNew('customizeConfirmModal', {
          context:context
        });
      };
    },
    hideInfobox: function () {
        var sessionName = "showInfobox-"+this._id;
        var hideInfobox = !Session.get(sessionName);
        return hideInfobox;
    }
});
Template.customizeEditPlugins.events({
  "click .toggleInfobox": function(event, template){
    var sessionName = "showInfobox-"+this._id;
    var session = Session.get(sessionName);
    if(session === null){
      //Set true
      Session.set(sessionName, true);
    }else {
      Session.set(sessionName, !session);
    }
  }
});
