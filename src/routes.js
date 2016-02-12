Router.plugin('Meteorstrap');

Router.route('/', function () {
  this.render('Welcome');
});
Router.route('/overlay', function () {
  this.render('Overlay');
});
Router.route('/theme_editor', function () {
  this.render('ThemeEditor');
});
