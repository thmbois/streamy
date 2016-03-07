
Template.customizeEditPlugins.helpers({
  plugins: function(){
    return Plugins.find({},{
      sort: {
        type:-1
      }
    });
  },
  infos: function(plugin_id){
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
        var doc = collection.findOne(id);
        var context = this;
        var bModal = BModals.showNew('customizeConfirmModal', {
          context:context
        });
      };
    }
});
