(function() {
  window.App = Ember.Application.create();

  App.ApplicationAdapter = DS.FixtureAdapter.extend();

}).call(this);

(function() {
  App.Router.map(function() {
    this.route("account");
    return this.resource("company", {
      path: "/:company_id"
    }, function() {
      this.route("clients");
      this.route("recipes");
      this.resource("recipe", {
        path: "/recipe/:recipe_id"
      });
      this.route("resources");
      this.route("access");
      return this.route("activity");
    });
  });

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
    users: DS.hasMany('user', {
      async: true
    }),
    clients: DS.hasMany('company', {
      async: true
    }),
    parent: DS.belongsTo('company'),
    lastFour: DS.attr('number'),
    creditType: DS.attr('string')
  });

  App.Company.FIXTURES = [
    {
      id: 1,
      name: "Sound Advice",
      slug: "soundadvice",
      users: [1, 2, 3],
      clients: [2, 3, 4, 5],
      creditType: 'Amex',
      lastFour: 1003
    }, {
      id: 2,
      name: "Sterling Cooper",
      slug: "sterling-cooper",
      users: [4, 5, 6],
      parent: 1
    }, {
      id: 3,
      name: "Client 3",
      slug: "client3",
      parent: 1
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
    tasks: DS.hasMany('task', {
      async: true
    }),
    name: DS.attr('string'),
    frequency: DS.attr('string'),
    timeframe: DS.attr('number')
  });

  App.Recipe.FIXTURES = [
    {
      id: 1,
      name: "Touch-up (transactions and bills)",
      frequency: "Weekly",
      timeframe: 5,
      tasks: [1, 2, 3, 4, 5, 6]
    }, {
      id: 2,
      name: "Review & reconcile",
      frequency: "Monthly",
      timeframe: 5,
      tasks: [7, 8, 9, 10, 11, 12, 13]
    }, {
      id: 3,
      name: "Forecast review",
      frequency: "Quarterly",
      timeframe: 1,
      tasks: []
    }, {
      id: 4,
      name: "Update competitive analysis",
      frequency: "Quarterly",
      timeframe: 15,
      tasks: []
    }, {
      id: 5,
      name: "Build market survey for a new product",
      frequency: "As needed",
      tasks: []
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
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyActivityRoute = (function(_super) {
    __extends(CompanyActivityRoute, _super);

    function CompanyActivityRoute() {
      _ref = CompanyActivityRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CompanyActivityRoute.prototype.model = function() {
      return this.store.findAll('activity');
    };

    return CompanyActivityRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyClientsRoute = (function(_super) {
    __extends(CompanyClientsRoute, _super);

    function CompanyClientsRoute() {
      _ref = CompanyClientsRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CompanyClientsRoute.prototype.model = function() {
      return this.store.find('company');
    };

    return CompanyClientsRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyIndexRoute = (function(_super) {
    __extends(CompanyIndexRoute, _super);

    function CompanyIndexRoute() {
      _ref = CompanyIndexRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CompanyIndexRoute.prototype.redirect = function() {
      return this.transitionTo('company.recipes');
    };

    return CompanyIndexRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyRecipeRoute = (function(_super) {
    __extends(CompanyRecipeRoute, _super);

    function CompanyRecipeRoute() {
      _ref = CompanyRecipeRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return CompanyRecipeRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyRecipesRoute = (function(_super) {
    __extends(CompanyRecipesRoute, _super);

    function CompanyRecipesRoute() {
      _ref = CompanyRecipesRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CompanyRecipesRoute.prototype.model = function() {
      return this.store.findAll('recipe');
    };

    return CompanyRecipesRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.CompanyResourcesRoute = (function(_super) {
    __extends(CompanyResourcesRoute, _super);

    function CompanyResourcesRoute() {
      _ref = CompanyResourcesRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return CompanyResourcesRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
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

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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
