class VirtualOffice.ClientsRoute extends Ember.Route
  model: ->
    @store.findAll('client')