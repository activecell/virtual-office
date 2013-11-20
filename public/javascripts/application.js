(function() {
  var App;

  App = Ember.Application.create();

  module.exports = App;

}).call(this);

(function() {
  var App;

  App = require('./app');

  App.Router.map(function() {});

}).call(this);
