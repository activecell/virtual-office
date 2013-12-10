class App.IndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'company'