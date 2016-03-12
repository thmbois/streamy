// Declare 'Plugins' collection.
BasicInfo = new Mongo.Collection("BasicInfo");

FAQ = new SimpleSchema({
  question: {
    type: String,
    max: 200
  },
  answer: {
    type: String,
    max: 200
  }
});

Social = new SimpleSchema({
  network: {
    type: String,
    max: 200
  },
  link: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    max: 200
  }
});

// Define schema for Examples collection.
BasicInfo.attachSchema({
  title:{
    type: String,
    max: 20
  },
  information: {
    type: String,
    optional: true,
    max: 2000,
    autoform: {
      rows: 4
    }
  },
  faqs: {
    type: [FAQ],
    optional: true
  },
  socialnetworks: {
    type: [Social],
    optional: true
  }
});
