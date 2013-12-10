class App.CompanyClientsRoute extends Ember.Route
  model: ->
    @store.find('company')