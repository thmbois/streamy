Template.registerHelper('percent',
    function(count, all) {
        return (count/all*100).toFixed(1);
    }
);
