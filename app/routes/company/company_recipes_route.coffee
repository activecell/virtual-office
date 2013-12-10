class App.CompanyRecipesRoute extends Ember.Route
  model: ->
    @store.findAll('recipe')