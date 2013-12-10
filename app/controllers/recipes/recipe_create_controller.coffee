App.RecipeCreateController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"