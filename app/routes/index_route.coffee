class VirtualOffice.IndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'boards'