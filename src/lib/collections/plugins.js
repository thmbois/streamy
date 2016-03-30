/**
 * @file
 * Defines 'Examples' collections and helpers.
 */
/* globals Examples:true, Mongo */

// Declare 'Plugins' collection.
Plugins = new Mongo.Collection("Plugins");

Schema ={};
Schema.Twitter = new SimpleSchema({
  hashtag:{
    type: String
  }
});
Schema.Chat = new SimpleSchema({
  channel:{
    type: String
  },
  maxMessages:{
    type: Number
  }
});
Schema.Twitch = new SimpleSchema({
  channel:{
    type: String
  },
  muted:{
    type: Boolean
  }
});
// Define schema for Examples collection.
Plugins.attachSchema({
  name: {
    type: String,
    max: 200
  },
  type: {
    type: String,
    max: 200,
    allowedValues: ['info','cam', 'chat', 'twitch', 'twitter','polls']
  },
  position: {
    type: String,
    max: 200,
    allowedValues: ['top-left','top-right', 'bottom-left', 'bottom-right']
  },
  order: {
    type: Number,
    min: 0
  },
  twitter: {
    type: Schema.Twitter,
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('type').value == "twitter";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  },
  chat: {
    type: Schema.Chat,
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('type').value == "chat";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  },
  twitch: {
    type: Schema.Twitch,
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('type').value == "twitch";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  }
});

// // Add helpers to Examples collection object.
// Examples.helpers({
//   titleShort: function() {
//     return this.title.substring(0, 50);
//   }
// });
