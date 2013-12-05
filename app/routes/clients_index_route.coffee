class VirtualOffice.ClientsIndexRoute extends Ember.Route
  model: ->
    @store.findAll('clients')

  setupController: (controller, client) ->
    controller.set 'model', client