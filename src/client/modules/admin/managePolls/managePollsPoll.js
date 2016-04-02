Template.managePollsPoll.events({
  "click .editPoll": function(event, template){
    var context = this;
    var bModal = BModals.showNew('managePollsEditModal', {
      context:context
    });
  },
  "click .deletePoll": function(event, template){
    var context = this;
    context.remove = function() {
      Meteor.call("deletePoll", this._id);
    };
    var bModal = BModals.showNew('customizeConfirmModal', {
      context:context
    });
  },
  "click .togglePoll": function(event, template){
    Meteor.call("togglePoll", this._id);
  }
});
