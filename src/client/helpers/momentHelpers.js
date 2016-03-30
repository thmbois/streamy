Template.registerHelper('fromNow',
    function(timestamp) {
      if (timestamp) {
        var mom = moment(timestamp);
        return mom.fromNow();
      }
    }
);
