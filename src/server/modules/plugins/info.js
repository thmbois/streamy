/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Info */
Meteor.publish('Info', function() {
    return Info.find();
});
// No clients may insert, update, or remove infos
// Info.permit(['insert', 'update', 'remove']).never().apply();

// Clients may insert, update, or remove infos only if an admin user is logged in
Info.permit(['insert', 'update', 'remove']).ifHasRole({role: 'admin', group: 'default-group'}).apply();
