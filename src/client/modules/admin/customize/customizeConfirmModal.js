Template.customizeConfirmModal.events({
  "click #customizeConfirmModalSave": function(event, template){
    this.context.remove();
  },
  "click #customizeConfirmModalClose": function(event, template){
    toastr.warning("", "Item not deleted.");
  }
});
