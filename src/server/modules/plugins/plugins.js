/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Plugins */

// Meteor.startup(function() {
//   Plugins.allow({
//     insert: function(userId, example) {
//       return true;
//     },
//     update: function(userId, example) {
//       return true;
//     },
//     remove: function(userId, example) {
//       return true;
//     }
//   });
// });

Meteor.publish('Plugins', function() {
    return Plugins.find();
});
