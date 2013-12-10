App.RecipeDeleteController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"