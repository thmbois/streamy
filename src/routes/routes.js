// Router.plugin('Meteorstrap');

Router.route('/', function () {
  Router.go("/overview");
});
Router.route('/overlay', function () {
  this.render('overlayRaw');
});

var mainLayout = "layoutMain";

function checkForAdmin(context, template) {
  var loggedInUser = Meteor.user();

  if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], 'default-group')) {
    // Router.go("/");
    context.render("accessDenied");
  }else {
    context.render(template);
  }
  // context.render(template);
}

Router.route("/admin", function(){
  this.layout(mainLayout);
  // this.render("main");
  checkForAdmin(this,"main");
});
/*Admin Routes*/

Router.route("/admin/overlay", function(){
  this.layout(mainLayout);
  checkForAdmin(this,"overlay");
}, {
  name: 'admin.overlay'
});

Router.route("/admin/interaction", function(){
  this.layout(mainLayout);
  checkForAdmin(this,"interaction");
}, {
  name: 'admin.interaction'
});

Router.route("/admin/information", function(){
  this.layout(mainLayout);
  checkForAdmin(this,"information");
}, {
  name: 'admin.information'
});

Router.route("/admin/customize", function(){
  this.layout(mainLayout);
  checkForAdmin(this,"customize");
}, {
  name: 'admin.customize'
});

Router.route("/admin/customize/editPlugins", function(){
  this.layout(mainLayout);
  checkForAdmin(this,"customizeEditPlugins");
}, {
  name: 'admin.customize.editPlugins'
});

/*User Routes*/
Router.route("/overview", function(){
  this.layout(mainLayout);
  this.render("userInteraction");
});
Router.route("/information", function(){
  this.layout(mainLayout);
  this.render("userInformation");
});
