/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Polls */

Meteor.publish('Polls', function() {

  return Polls.find(
    {

    },{
      active:true,
      sort: {
        timestamp:-1
      }
    }
  );
});
// Clients may insert, update, or remove polls only if an admin user is logged in
Polls.permit(['insert', 'update', 'remove']).ifHasRole({role: 'admin', group: 'default-group'}).apply();
