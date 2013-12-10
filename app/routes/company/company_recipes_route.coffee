class App.CompanyRecipesRoute extends Ember.Route
  model: ->
    @modelFor('company').get('recipes')