class VirtualOffice.ClientIndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'client.recipes'