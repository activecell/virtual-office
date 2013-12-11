App.TaskEditController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"