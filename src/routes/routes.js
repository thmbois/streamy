// Router.plugin('Meteorstrap');

Router.route('/', function () {
  this.render('layoutMain');
});
Router.route('/overlay', function () {
  this.render('layoutOverlay');
});
Router.route('/overlay-raw', function () {
  this.render('overlayRaw');
});
