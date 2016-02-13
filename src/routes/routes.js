Router.plugin('Meteorstrap');

Router.route('/', function () {
  this.render('layoutMain');
});
Router.route('/overlay', function () {
  this.render('layoutOverlay');
});
Router.route('/theme_editor', function () {
  this.render('layoutThemeEditor');
});
