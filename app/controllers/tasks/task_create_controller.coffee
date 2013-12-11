App.TaskCreateController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"