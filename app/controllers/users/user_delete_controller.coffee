App.UserDeleteController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"