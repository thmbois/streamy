Package.describe({
  summary: 'An IRC API specifically designed for use with Meteor',
  name: 'thmbois:irc',
  version: '0.1.0',
  git: 'https://github.com/thmbois/meteor-irc'
});

Package.on_use(function (api) {
  api.use('standard-app-packages', ['client', 'server']);
  api.add_files('lib/collections.js', ['client','server']);
  api.add_files([
    'server/irc.js'
    ], 'server');
  api.export('IRC', 'server');
  api.export([
    'IRCMessages',
    'IRCChannels',
    'IRCConnections',
    'IRCLinks'
    ], ['server','client']);
});
