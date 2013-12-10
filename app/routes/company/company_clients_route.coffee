class App.CompanyClientsRoute extends Ember.Route
  model: ->
    @modelFor('company').get('clients')