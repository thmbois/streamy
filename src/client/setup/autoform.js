var hooksObject = {
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    toastr.success("Sucessful", capitalizeFirstLetter(formType));
  },

  // Called when any submit operation fails
  onError: function(formType, error) {
    toastr.error(error, capitalizeFirstLetter(formType));
  }
};

//run the hook for all forms in the app (global hook)
AutoForm.addHooks(null, hooksObject);

AutoForm.hooks({
  addPollForm: {
    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {
      document.getElementById("addPollModalClose").click();
    }
  },
  editPoll: {
    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {
      document.getElementById("managePollsEditModalClose").click();
    }
  }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
