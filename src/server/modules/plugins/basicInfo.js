/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, BasicInfo */
Meteor.publish('BasicInfo', function() {
    return BasicInfo.find();
});
// No clients may insert, update, or remove infos
// Info.permit(['insert', 'update', 'remove']).never().apply();

// Clients may insert, update, or remove infos only if an admin user is logged in
BasicInfo.permit(['update']).ifHasRole({role: 'admin', group: 'default-group'}).apply();
