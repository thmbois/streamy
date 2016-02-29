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
Router.route("/admin/", function(){
  this.render("layoutAdminMain");
});
/*Admin Routes*/
Router.route("/admin/overlay", function(){
  this.render("layoutAdminOverlay");
});
Router.route("/admin/interaction", function(){
  this.render("layoutAdminInteraction");
});
Router.route("/admin/information", function(){
  this.render("layoutAdminInformation");
});
Router.route("/admin/customize", function(){
  this.render("layoutAdminCustomize");
});
/*Client Routes*/
Router.route("/client/", function(){
  this.render("layoutClientMain");
});
Router.route("/client/information", function(){
  this.render("layoutClientInformation");
});
