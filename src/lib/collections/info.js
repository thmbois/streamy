Info = new Mongo.Collection("Info");

Info.attachSchema({
  text: {
    type: String,
    max: 200
  },
  hue: {
    type: String,
    allowedValues: ['red','pink','purple',
    'deep-purple','indigo','blue','light-blue',
    'cyan','teal','green','light-green','lime',
    'yellow','amber','orange','deep-orange',
    'brown','grey','blue-grey'],
    defaultValue: 'grey'
  },
  saturation: {
    type: String,
    allowedValues: ['50','100', '200', '300','400','500','600','700','800','900'],
    defaultValue: '500'
  },
  icon:{
    type: String,
    regEx: /fa-[a-z]+/,
    optional: true
  },
  order: {
    type: Number,
    min: 0
  },
  plugin_id:{
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});

Info.helpers({
  color: function() {
    return this.hue+"-"+this.saturation;
  }
});
