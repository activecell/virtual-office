class App.CompanyRoute extends Ember.Route
  model: (params) ->
    @store.find 'company', params.company_id or 1

class App.CompanyIndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'recipes.index'

class App.ClientsRoute extends Ember.Route
  model: ->
    @modelFor('company').get('clients')

class App.RecipesRoute extends Ember.Route
  model: ->
    @modelFor('company').get('recipes')

class App.RecipesIndexRoute extends Ember.Route
  model: ->
    @modelFor('company').get('recipes')

class App.RecipeRoute extends Ember.Route
  model: (params) ->
    @store.find 'recipe', params.recipe_id

class App.ResourcesRoute extends Ember.Route
  model: ->
    @modelFor('company')

class App.AccessRoute extends Ember.Route
  model: ->
    @modelFor('company')

class App.ActivityRoute extends Ember.Route
  model: ->
    @modelFor('company').get('activities')