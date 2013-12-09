class VirtualOffice.ActivityRoute extends Ember.Route
  model: ->
    @store.findAll('activity')