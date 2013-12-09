(function() {
  window.VirtualOffice = Ember.Application.create();

  VirtualOffice.ApplicationAdapter = DS.FixtureAdapter.extend();

}).call(this);

(function() {
  VirtualOffice.Router.map(function() {
    this.route("clients");
    this.resource("client", {
      path: "/client/:client_id"
    }, function() {
      this.route("recipes");
      this.resource("recipe", {
        path: "/recipe/:recipe_id"
      });
      this.route("resources");
      this.route("access");
      return this.route("activity");
    });
    this.route("recipes");
    this.resource("recipe", {
      path: "/recipe/:recipe_id"
    });
    this.route("resources");
    this.route("access");
    this.route("activity");
    return this.route("account");
  });

}).call(this);

(function() {
  VirtualOffice.Activity = DS.Model.extend({
    description: DS.attr('string'),
    dateString: DS.attr('string'),
    status: DS.attr('string')
  });

  VirtualOffice.Activity.FIXTURES = [
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
  VirtualOffice.Client = DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string')
  });

  VirtualOffice.Client.FIXTURES = [
    {
      id: 1,
      name: "Sterling Cooper",
      slug: "sterling-cooper"
    }, {
      id: 2,
      name: "Client 2",
      slug: "client2"
    }, {
      id: 3,
      name: "Client 3",
      slug: "client3"
    }, {
      id: 4,
      name: "Client 4",
      slug: "client4"
    }
  ];

}).call(this);

(function() {
  VirtualOffice.Recipe = DS.Model.extend({
    tasks: DS.hasMany('task', {
      async: true
    }),
    name: DS.attr('string'),
    frequency: DS.attr('string'),
    timeframe: DS.attr('number')
  });

  VirtualOffice.Recipe.FIXTURES = [
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
  VirtualOffice.Task = DS.Model.extend({
    name: DS.attr('string'),
    avatarSrc: DS.attr('string'),
    minutes: DS.attr('number')
  });

  VirtualOffice.Task.FIXTURES = [
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
  VirtualOffice.User = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),
    emailMe: DS.attr('boolean'),
    password: DS.attr('string'),
    passwordConf: DS.attr('string'),
    companyName: DS.attr('string'),
    subdomain: DS.attr('string'),
    lastFour: DS.attr('number'),
    creditType: DS.attr('string')
  });

  VirtualOffice.User.FIXTURES = [
    {
      id: 1,
      name: "Jason Hill",
      email: "jason@hill.com",
      emailMe: true,
      password: "PeachesAndCream01",
      passwordConf: "PeachesAndCream01",
      companyName: "Sound Advice",
      subdomain: 'soundadvice',
      creditType: 'Amex',
      lastFour: 1003
    }
  ];

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.AccountRoute = (function(_super) {
    __extends(AccountRoute, _super);

    function AccountRoute() {
      _ref = AccountRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AccountRoute.prototype.renderTemplate = function() {
      AccountRoute.__super__.renderTemplate.apply(this, arguments);
      this.render('user', {
        into: 'account',
        outlet: 'user'
      });
      this.render('company', {
        into: 'account',
        outlet: 'company'
      });
      return this.render('billing', {
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

  VirtualOffice.ActivityRoute = (function(_super) {
    __extends(ActivityRoute, _super);

    function ActivityRoute() {
      _ref = ActivityRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ActivityRoute.prototype.model = function() {
      return this.store.findAll('activity');
    };

    return ActivityRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientAccessRoute = (function(_super) {
    __extends(ClientAccessRoute, _super);

    function ClientAccessRoute() {
      _ref = ClientAccessRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientAccessRoute.prototype.renderTemplate = function() {
      return this.render('access');
    };

    return ClientAccessRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientActivityRoute = (function(_super) {
    __extends(ClientActivityRoute, _super);

    function ClientActivityRoute() {
      _ref = ClientActivityRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientActivityRoute.prototype.renderTemplate = function() {
      return this.render('activity');
    };

    return ClientActivityRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientIndexRoute = (function(_super) {
    __extends(ClientIndexRoute, _super);

    function ClientIndexRoute() {
      _ref = ClientIndexRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientIndexRoute.prototype.redirect = function() {
      return this.transitionTo('client.recipes');
    };

    return ClientIndexRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientRecipeRoute = (function(_super) {
    __extends(ClientRecipeRoute, _super);

    function ClientRecipeRoute() {
      _ref = ClientRecipeRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientRecipeRoute.prototype.renderTemplate = function() {
      return this.render('recipe');
    };

    return ClientRecipeRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientRecipesRoute = (function(_super) {
    __extends(ClientRecipesRoute, _super);

    function ClientRecipesRoute() {
      _ref = ClientRecipesRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientRecipesRoute.prototype.renderTemplate = function() {
      return this.render('recipes');
    };

    ClientRecipesRoute.prototype.model = function() {
      return this.store.findAll('recipe');
    };

    return ClientRecipesRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientResourcesRoute = (function(_super) {
    __extends(ClientResourcesRoute, _super);

    function ClientResourcesRoute() {
      _ref = ClientResourcesRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientResourcesRoute.prototype.renderTemplate = function() {
      return this.render('resources');
    };

    return ClientResourcesRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.ClientsRoute = (function(_super) {
    __extends(ClientsRoute, _super);

    function ClientsRoute() {
      _ref = ClientsRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ClientsRoute.prototype.model = function() {
      return this.store.findAll('client');
    };

    return ClientsRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.IndexRoute = (function(_super) {
    __extends(IndexRoute, _super);

    function IndexRoute() {
      _ref = IndexRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IndexRoute.prototype.redirect = function() {
      return this.transitionTo('clients');
    };

    return IndexRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.RecipesRoute = (function(_super) {
    __extends(RecipesRoute, _super);

    function RecipesRoute() {
      _ref = RecipesRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RecipesRoute.prototype.model = function() {
      return this.store.findAll('recipe');
    };

    return RecipesRoute;

  })(Ember.Route);

}).call(this);
