Template.registerHelper('percent',
    function(count, all) {
        if(all<=0){
          return 0;
        }
        return (count/all*100).toFixed(1);
    }
);
