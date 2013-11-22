(function() {
  window.VirtualOffice = Ember.Application.create();

  window.VirtualOffice.Controllers = {};

  window.VirtualOffice.Routes = {};

  window.VirtualOffice.Views = {};

}).call(this);

(function() {
  VirtualOffice.Router.map(function() {
    this.route("login", {
      path: "/login"
    });
    this.route("index", {
      path: "/"
    });
    this.route("boards", {
      path: "/boards"
    });
    this.route("recipes", {
      path: "/recipes"
    });
    this.route("resources", {
      path: "/resources"
    });
    this.route("account", {
      path: "/account"
    });
    return this.route("discounts", {
      path: "/discounts"
    });
  });

}).call(this);
