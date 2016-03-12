/**
 * @file
 * Defines 'Examples' collections and helpers.
 */
/* globals Examples:true, Mongo */

// Declare 'Plugins' collection.
Plugins = new Mongo.Collection("Plugins");

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
  }
  // ,
  // config: {
  //   type: Object,
  //   optional: true
  // }
});

// // Add helpers to Examples collection object.
// Examples.helpers({
//   titleShort: function() {
//     return this.title.substring(0, 50);
//   }
// });
