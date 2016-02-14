Template.plugins.helpers({
  topRight: function(){
    var data = Plugins.find({position:"top-right"},{fields: {'type':1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  topLeft: function(){
    var data = Plugins.find({position:"top-left"},{fields: {'type':1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  bottomRight: function(){
    var data = Plugins.find({position:"bottom-right"},{fields: {'type':1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
  bottomLeft: function(){
    var data = Plugins.find({position:"bottom-left"},{fields: {'type':1}});
    var returnData = {
      "data": data,
      "active": data.count() > 0
    };
    return returnData;
  },
});
