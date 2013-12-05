class VirtualOffice.RecipesRoute extends Ember.Route
  model: ->
    @store.findAll('recipe')