class App.CompanyIndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'company.recipes'