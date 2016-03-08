ServiceConfiguration.configurations.remove({
  service: "twitch"
});
var twitchAuth = Meteor.settings.twitchAuth;
ServiceConfiguration.configurations.insert({
  service: "twitch",
  clientId: twitchAuth.clientId,
  redirectUri: Meteor.absoluteUrl() + '_oauth/twitch?close',
  secret: twitchAuth.secret
});
if(Meteor.users.find({},{roles:{ 'default-group': [ 'admin' ] }}).count()===0){
  var adminAccount = Meteor.settings.adminAccount;
  if (adminAccount) {
    admin = Accounts.createUser({
      email: adminAccount.email,
      password: adminAccount.password,
      profile: { name: adminAccount.name }
    });
      console.log(admin+" created.");
      Roles.addUsersToRoles(admin, ['admin'], 'default-group');
      console.log(admin+" added to Admin group.");
      console.log(admin+" you can login with Email: "+ adminAccount.email+" PW: "+adminAccount.password);

  } else {console.log("Settings.json needs email, password and name! Please have a look at the example");}
}
