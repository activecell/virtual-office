App.UserParentAddController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"