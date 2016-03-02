if (!Info.findOne()){
  //Add Test Cam
  Info.insert({
    text:"Test Text 01",
    order:1,
    hue:"red",
    saturation: "500",
    icon:"fa-beer",
    plugin_id:"EF3YgaGqn3XbdA3vg"
  });

  //Add Test Info
  Info.insert({
    text:"Test Text 02",
    order:2,
    hue:"blue",
    saturation: "500",
    icon:"fa-bug",
    plugin_id:"EF3YgaGqn3XbdA3vg"
  });

  Info.insert({
    _id: "KCTpqHsK5JD5GtdBT",
    text: "Other Info 01",
    order: 1,
    hue: "orange",
    saturation: "500",
    icon: "fa-diamond",
    plugin_id: "gKaXDExWEK3m6G4qA"
  });
}
