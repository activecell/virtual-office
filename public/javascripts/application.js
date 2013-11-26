(function() {
  window.VirtualOffice = Ember.Application.create();

  VirtualOffice.ApplicationAdapter = DS.FixtureAdapter.extend();

}).call(this);

(function() {
  VirtualOffice.Router.map(function() {
    this.route("login", {
      path: "/login"
    });
    this.route("index", {
      path: "/"
    });
    this.resource("boards", function() {
      return this.route("show");
    });
    this.resource("recipes", function() {
      return this.route("show");
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

(function() {
  VirtualOffice.Board = DS.Model.extend({
    tasks: DS.hasMany('task'),
    name: DS.attr('string'),
    status: DS.attr('string')
  });

  VirtualOffice.Board.FIXTURES = [
    {
      id: 1,
      name: "October 2013",
      status: "Completed",
      id: 2,
      name: "Virtual assistant tasks",
      status: "Ongoing",
      id: 3,
      name: "September 2013",
      status: "Complete",
      id: 4,
      name: "August 2013",
      status: "Complete"
    }
  ];

}).call(this);

(function() {
  VirtualOffice.Task = DS.Model.extend({
    board: DS.belongsTo('board'),
    name: DS.attr('string'),
    status: DS.attr('string'),
    avatarSrc: DS.attr('string'),
    minutes: DS.attr('number')
  });

  VirtualOffice.Task.FIXTURES = [
    {
      id: 1,
      name: "Jack-in-the-box",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 8,
      id: 2,
      name: "Look nasty and stuff",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20",
      minutes: 1,
      id: 3,
      name: "Cocoon 'em in gaffer tape",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 34,
      id: 4,
      name: "Nick the van",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 4,
      id: 5,
      name: "Swap the gear",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 2,
      id: 6,
      name: "Bring it all back here",
      status: "Completed",
      avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20",
      minutes: 10
    }
  ];

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.BoardsIndexController = (function(_super) {
    __extends(BoardsIndexController, _super);

    function BoardsIndexController() {
      _ref = BoardsIndexController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return BoardsIndexController;

  })(Ember.ArrayController);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.BoardsShowController = (function(_super) {
    __extends(BoardsShowController, _super);

    function BoardsShowController() {
      _ref = BoardsShowController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return BoardsShowController;

  })(Ember.ArrayController);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.BoardsIndexRoute = (function(_super) {
    __extends(BoardsIndexRoute, _super);

    function BoardsIndexRoute() {
      _ref = BoardsIndexRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BoardsIndexRoute.prototype.model = function() {
      return this.store.find('board');
    };

    BoardsIndexRoute.prototype.setupController = function(controller, board) {
      return controller.set('model', board);
    };

    return BoardsIndexRoute;

  })(Ember.Route);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  VirtualOffice.BoardsShowRoute = (function(_super) {
    __extends(BoardsShowRoute, _super);

    function BoardsShowRoute() {
      _ref = BoardsShowRoute.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BoardsShowRoute.prototype.model = function() {
      var store;
      store = this.get('store');
      return store.find('task');
    };

    BoardsShowRoute.prototype.setupController = function(controller, task) {
      return controller.set('model', task);
    };

    return BoardsShowRoute;

  })(Ember.Route);

}).call(this);
