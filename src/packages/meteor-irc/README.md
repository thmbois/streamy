meteor-irc
___

An IRC package specifically designed for use with Meteor

###Example Usage

```
mrt add irc
```


```
var params = {
  server: 'irc.freenode.net',
  port: 6667,
  nick: 'meteorirc',
  password: false,
  realname: 'Meteor IRC',
  username: 'Meteor-IRC',
  channels: ['#meteor'],
  debug: false,
  stripColors: true
};
client = new IRC(params);
client.connect();

Meteor.setTimeout(function() {
  client.say('#meteor', 'HI THERE I JUST COPY AND PASTA'd ALL THIS');
}, 20000);
```

Set debug to true if you would like to echo the connection to server.