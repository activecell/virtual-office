class VirtualOffice.ClientRecipesRoute extends Ember.Route
  renderTemplate: ->
    @render 'recipes'

  model: ->
    @store.findAll('recipe')