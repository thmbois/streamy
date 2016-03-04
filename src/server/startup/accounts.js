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
