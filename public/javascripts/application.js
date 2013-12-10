(function() {
  window.App = Ember.Application.create();

  App.ApplicationAdapter = DS.FixtureAdapter.extend();

}).call(this);

(function() {
  App.Activity = DS.Model.extend({
    description: DS.attr('string'),
    dateString: DS.attr('string'),
    status: DS.attr('string')
  });

  App.Activity.FIXTURES = [
    {
      id: 1,
      description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Dropbox</a>",
      dateString: "Oct 1, 2013",
      status: 'Pending'
    }, {
      id: 2,
      description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Other service</a></td",
      dateString: "Oct 1, 2013",
      status: 'Complete'
    }, {
      id: 3,
      description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>A different service</a>",
      dateString: "Oct 1, 2013",
      status: 'Complete'
    }, {
      id: 4,
      description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Yet another service</a>",
      dateString: "Oct 1, 2013",
      status: 'Complete'
    }, {
      id: 5,
      description: "Removed <a href='mailto:roger.sterling@sterlingcooper.com'>Roger Sterling</a> from <a href='http://www.dropbox.com'>Dropbox</a>",
      dateString: "Oct 1, 2013",
      status: 'Complete'
    }, {
      id: 6,
      description: "Removed <a href='mailto:roger.sterling@sterlingcooper.com'>Roger Sterling</a> from <a href='http://www.dropbox.com'>Another service</a>",
      dateString: "Oct 1, 2013",
      status: 'Complete'
    }, {
      id: 7,
      description: "Created task <a href='http://www.zendesk.com'>Process Bill.com Inbox</a> from recipe <a href='www.activecell.com'>Monthly bookkeeping</a>",
      dateString: "Sep 4, 2013",
      status: 'Complete'
    }, {
      id: 8,
      description: "Created task <a href='http://www.zendesk.com'>Reconcile bank statements</a> from recipe <a href='www.activecell.com'>Monthly bookkeeping</a>",
      dateString: "Sep 4, 2013",
      status: 'Complete'
    }
  ];

}).call(this);

(function() {
  App.Company = DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string'),
    lastFour: DS.attr('number'),
    creditType: DS.attr('string'),
    users: DS.hasMany('user', {
      async: true
    }),
    clients: DS.hasMany('company', {
      async: true
    }),
    parent: DS.belongsTo('company'),
    recipes: DS.hasMany('recipe', {
      async: true
    }),
    services: DS.hasMany('service', {
      async: true
    }),
    activities: DS.hasMany('activity', {
      async: true
    })
  });

  App.Company.FIXTURES = [
    {
      id: 1,
      name: "Sound Advice",
      slug: "soundadvice",
      creditType: 'Amex',
      lastFour: 1003,
      users: [1, 2, 3],
      clients: [2, 3, 4, 5],
      recipes: [1, 2, 3, 4],
      services: [1, 2, 3, 4, 5, 6, 7],
      activities: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
      id: 2,
      name: "Sterling Cooper",
      slug: "sterling-cooper",
      users: [4, 5, 6],
      parent: 1,
      recipes: [2, 3, 5],
      services: [1, 2, 6, 7],
      activities: [1, 2, 3]
    }, {
      id: 3,
      name: "Client 3",
      slug: "client3",
      parent: 1,
      recipes: [3, 4]
    }, {
      id: 4,
      name: "Client 4",
      slug: "client4",
      parent: 1
    }, {
      id: 5,
      name: "Client 5",
      slug: "client5",
      parent: 1
    }
  ];

}).call(this);

(function() {
  App.Recipe = DS.Model.extend({
    company: DS.belongsTo('company'),
    tasks: DS.hasMany('task', {
      async: true
    }),
    name: DS.attr('string'),
    frequency: DS.attr('string'),
    timeframe: DS.attr('number'),
    active: DS.attr('boolean')
  });

  App.Recipe.FIXTURES = [
    {
      id: 1,
      name: "Touch-up (transactions and bills)",
      frequency: "Weekly",
      timeframe: 5,
      tasks: [1, 2, 3, 4, 5, 6],
      active: true
    }, {
      id: 2,
      name: "Review & reconcile",
      frequency: "Monthly",
      timeframe: 5,
      tasks: [7, 8, 9, 10, 11, 12, 13],
      active: true
    }, {
      id: 3,
      name: "Forecast review",
      frequency: "Quarterly",
      timeframe: 1,
      tasks: [],
      active: true
    }, {
      id: 4,
      name: "Update competitive analysis",
      frequency: "Quarterly",
      timeframe: 15,
      tasks: [],
      active: true
    }, {
      id: 5,
      name: "Build market survey for a new product",
      frequency: "As needed",
      tasks: [],
      active: true
    }
  ];

}).call(this);

(function() {
  App.Service = DS.Model.extend({
    company: DS.belongsTo('company'),
    category: DS.attr('string'),
    name: DS.attr('string'),
    url: DS.attr('string'),
    price: DS.attr('number')
  });

  App.Service.FIXTURES = [
    {
      id: 1,
      company: 1,
      category: 'Electronic signatures',
      name: 'Right Signature',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 2,
      company: 1,
      category: 'Accounts receivable',
      name: 'Bill.com',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 3,
      company: 1,
      category: 'Accounts payable',
      name: 'Bill.com',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 4,
      company: 1,
      category: 'Project management',
      name: 'Basecamp',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 5,
      company: 1,
      category: 'Payroll',
      name: 'Zen Payroll',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 6,
      company: 1,
      category: 'File management',
      name: 'Dropbox',
      url: 'www.google.com',
      price: 12.32
    }, {
      id: 7,
      company: 1,
      category: 'Document scanning',
      name: 'Shoeboxed',
      url: 'www.google.com',
      price: 12.32
    }
  ];

}).call(this);

(function() {
  App.Task = DS.Model.extend({
    name: DS.attr('string'),
    avatarSrc: DS.attr('string'),
    minutes: DS.attr('number')
  });

  App.Task.FIXTURES = [
    {
      id: 1,
      name: "Process Bill.com inbox",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 20
    }, {
      id: 2,
      name: "Process accounting email inbox",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 20
    }, {
      id: 3,
      name: "Process bills/receipts in Dropbox folder",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 20
    }, {
      id: 4,
      name: "Code new transactions based on rulebook",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 60
    }, {
      id: 5,
      name: "Add alerts about disconnected bank accounts",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 5
    }, {
      id: 6,
      name: "Add alerts about unknown/unexpected transactions",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 5
    }, {
      id: 7,
      name: "Download or confirm client's download of all bank statements to reconcile",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 20
    }, {
      id: 8,
      name: "Reconcile bank statements, identifying and resolving variances where possible based on the rulebook",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 60
    }, {
      id: 9,
      name: "Add alerts for any unresolved discrepancies",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 5
    }, {
      id: 10,
      name: "Compare previous month P&L and Balance sheet to current month",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 40
    }, {
      id: 11,
      name: "Submit new P&L, Balance Sheet, and Exception report to manager for review",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 10
    }, {
      id: 12,
      name: "Resolve known issues, review reports with client, provide feedback to the team",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 30
    }, {
      id: 13,
      name: "Integrate feedback from manager and client",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 30
    }
  ];

}).call(this);

(function() {
  App.User = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),
    emailMe: DS.attr('boolean'),
    password: DS.attr('string'),
    passwordConf: DS.attr('string'),
    company: DS.belongsTo('company'),
    role: DS.attr('string'),
    lastLoggedInString: DS.attr('string')
  });

  App.User.FIXTURES = [
    {
      id: 1,
      name: "Jason Hill",
      email: "hill@soundadvice.jobs",
      emailMe: true,
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 1,
      role: "Admin",
      lastLoggedInString: "Oct 1, 2013"
    }, {
      id: 2,
      name: "Chris Gibson",
      email: "cg@soundadvice.jobs",
      emailMe: true,
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 1,
      role: "Staff",
      lastLoggedInString: "Oct 1, 2013"
    }, {
      id: 3,
      name: "Leo Chan",
      email: "lc@soundadvice.jobs",
      emailMe: true,
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 1,
      role: "Staff",
      lastLoggedInString: "Oct 1, 2013"
    }, {
      id: 4,
      name: "Don Draper",
      email: "don.draper@sterlingcooper.com",
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 2,
      role: "Admin",
      lastLoggedInString: "Oct 1, 2013"
    }, {
      id: 5,
      name: "Roger Sterling",
      email: "roger.sterling@sterlingcooper.com",
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 2,
      role: "User",
      lastLoggedInString: "Oct 1, 2013"
    }, {
      id: 6,
      name: "Peggy Olson",
      email: "peggy.olson@sterlingcooper.com",
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      company: 2,
      role: "User",
      lastLoggedInString: "Oct 1, 2013"
    }
  ];

}).call(this);

(function() {
  App.StaffSliderTable = Ember.View.extend({
    didInsertElement: function() {
      $("#slider1").slider({
        value: 30,
        min: 0,
        max: 500,
        step: 5,
        slide: function(event, ui) {
          $(".js-time1").html(ui.value);
          return $(".js-amt1").html(ui.value * 10);
        }
      });
      $("#slider2").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 5,
        slide: function(event, ui) {
          $(".js-time2").html(ui.value);
          return $(".js-amt2").html(ui.value * 25);
        }
      });
      $("#slider3").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 5,
        slide: function(event, ui) {
          $(".js-time3").html(ui.value);
          return $(".js-amt3").html(ui.value * 50);
        }
      });
      $("#slider4").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 5,
        slide: function(event, ui) {
          $(".js-time4").html(ui.value);
          return $(".js-amt4").html(ui.value * 100);
        }
      });
      $(".js-time1").html($("#slider1").slider("value"));
      $(".js-amt1").html(10 * $("#slider1").slider("value"));
      $(".js-time2").html($("#slider2").slider("value"));
      $(".js-amt2").html(25 * $("#slider2").slider("value"));
      $(".js-time3").html($("#slider3").slider("value"));
      $(".js-amt3").html(50 * $("#slider3").slider("value"));
      $(".js-time4").html($("#slider4").slider("value"));
      return $(".js-amt5").html(100 * $("#slider4").slider("value"));
    }
  });

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.AccountRoute = (function(_super) {
    __extends(AccountRoute, _super);

    function AccountRoute() {
      _ref = AccountRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AccountRoute.prototype.renderTemplate = function() {
      AccountRoute.__super__.renderTemplate.apply(this, arguments);
      this.render('account/user', {
        into: 'account',
        outlet: 'user'
      });
      this.render('account/company', {
        into: 'account',
        outlet: 'company'
      });
      return this.render('account/billing', {
        into: 'account',
        outlet: 'billing'
      });
    };

    AccountRoute.prototype.model = function() {
      return this.store.find('user', 1);
    };

    return AccountRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyRoute = (function(_super) {
    __extends(CompanyRoute, _super);

    function CompanyRoute() {
      _ref = CompanyRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CompanyRoute.prototype.model = function(params) {
      return this.store.find('company', params.company_id || 1);
    };

    return CompanyRoute;

  })(Ember.Route);

  App.CompanyIndexRoute = (function(_super) {
    __extends(CompanyIndexRoute, _super);

    function CompanyIndexRoute() {
      _ref1 = CompanyIndexRoute.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    CompanyIndexRoute.prototype.redirect = function() {
      return this.transitionTo('recipes.index');
    };

    return CompanyIndexRoute;

  })(Ember.Route);

  App.ClientsRoute = (function(_super) {
    __extends(ClientsRoute, _super);

    function ClientsRoute() {
      _ref2 = ClientsRoute.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    ClientsRoute.prototype.model = function() {
      return this.modelFor('company').get('clients');
    };

    return ClientsRoute;

  })(Ember.Route);

  App.RecipesRoute = (function(_super) {
    __extends(RecipesRoute, _super);

    function RecipesRoute() {
      _ref3 = RecipesRoute.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    RecipesRoute.prototype.model = function() {
      return this.modelFor('company').get('recipes');
    };

    return RecipesRoute;

  })(Ember.Route);

  App.RecipesIndexRoute = (function(_super) {
    __extends(RecipesIndexRoute, _super);

    function RecipesIndexRoute() {
      _ref4 = RecipesIndexRoute.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    RecipesIndexRoute.prototype.model = function() {
      return this.modelFor('company').get('recipes');
    };

    return RecipesIndexRoute;

  })(Ember.Route);

  App.RecipeRoute = (function(_super) {
    __extends(RecipeRoute, _super);

    function RecipeRoute() {
      _ref5 = RecipeRoute.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    RecipeRoute.prototype.model = function(params) {
      return this.store.find('recipe', params.recipe_id);
    };

    return RecipeRoute;

  })(Ember.Route);

  App.ResourcesRoute = (function(_super) {
    __extends(ResourcesRoute, _super);

    function ResourcesRoute() {
      _ref6 = ResourcesRoute.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    ResourcesRoute.prototype.model = function() {
      return this.modelFor('company');
    };

    return ResourcesRoute;

  })(Ember.Route);

  App.AccessRoute = (function(_super) {
    __extends(AccessRoute, _super);

    function AccessRoute() {
      _ref7 = AccessRoute.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    AccessRoute.prototype.model = function() {
      return this.modelFor('company').get('users');
    };

    return AccessRoute;

  })(Ember.Route);

  App.ActivityRoute = (function(_super) {
    __extends(ActivityRoute, _super);

    function ActivityRoute() {
      _ref8 = ActivityRoute.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    ActivityRoute.prototype.model = function() {
      return this.modelFor('company').get('activities');
    };

    return ActivityRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Router.map(function() {
    this.resource("account");
    return this.resource("company", {
      path: "/:company_id"
    }, function() {
      this.resource("clients");
      this.resource("recipes", function() {
        return this.resource("recipe", {
          path: "/:recipe_id"
        });
      });
      this.resource("resources");
      this.resource("access");
      return this.resource("activity");
    });
  });

  App.IndexRoute = (function(_super) {
    __extends(IndexRoute, _super);

    function IndexRoute() {
      _ref = IndexRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IndexRoute.prototype.redirect = function() {
      return this.transitionTo('company');
    };

    return IndexRoute;

  })(Ember.Route);

}).call(this);
