if (!Plugins.findOne()){
  //Add Test Cam
  Plugins.insert({
    name:"Cam",
    type:"cam",
    position:"top-left",
    order:1,
    config:{
    }
  });

  //Add Test Info
  Plugins.insert({
    _id: "EF3YgaGqn3XbdA3vg",
    name:"Info",
    type:"info",
    position:"top-right",
    order:1,
    config:{
    }
  });

  Plugins.insert({
    _id: "gKaXDExWEK3m6G4qA",
    name: "Info",
    type: "info",
    position: "top-right",
    order: 2,
    config: {}
  });

  Plugins.insert({
    name: "Chat",
    type: "chat",
    position: "bottom-right",
    order: 1,
    config: {}
  });
}
