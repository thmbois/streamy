/**
 * @file
 * Define allow and publish functions for Examples collection.
 */
/* globals Meteor, Interaction */

Meteor.publish('Interaction', function() {
	var loggedInUser = this.userId;
    if (!loggedInUser) {
      throw new Meteor.Error("not-authorized");
    }
    if (!Roles.userIsInRole(loggedInUser, ['admin'], 'default-group')) {
        return Interaction.find({
        	userId: loggedInUser

        },{
        	userId: false
        });
    }else {
    	return Interaction.find();
    }

});
// No clients may insert, update, or remove infos
// Info.permit(['insert', 'update', 'remove']).never().apply();

// Clients may insert, update, or remove infos only if an admin user is logged in
Interaction.permit(['update','insert','remove']).ifHasRole({role: 'admin', group: 'default-group'}).apply();
