class App.CompanyActivityRoute extends Ember.Route
  model: ->
    @store.findAll('activity')