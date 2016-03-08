/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Plugins */

Meteor.publish('Plugins', function() {
    return Plugins.find();
});

// No clients may insert, update, or remove plugins
// Plugins.permit(['insert', 'update', 'remove']).never().apply();

// Clients may insert, update, or remove plugins only if an admin user is logged in
Plugins.permit(['insert', 'update', 'remove']).ifHasRole({role: 'admin', group: 'default-group'}).apply();
