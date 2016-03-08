Template.registerHelper('humanizeInt',
    function(v1) {
      if (v1>1000) {
        return Humanize.compactInteger(v1, 1);
      }else {
        return Humanize.compactInteger(v1, 0);
      }
    }
);
