Template.plugins.helpers({
  topRight: function(){
    Meteor.subscribe("Plugins");
    var data = Plugins.find({position:"top-right"},{fields: {'type':1},sort :{order:1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  topLeft: function(){
    Meteor.subscribe("Plugins");
    var data = Plugins.find({position:"top-left"},{fields: {'type':1},sort :{order:1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  bottomRight: function(){
    Meteor.subscribe("Plugins");
    var data = Plugins.find({position:"bottom-right"},{fields: {'type':1},sort :{order:1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  bottomLeft: function(){
    Meteor.subscribe("Plugins");
    var data = Plugins.find({position:"bottom-left"},{fields: {'type':1},sort :{order:1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
});
