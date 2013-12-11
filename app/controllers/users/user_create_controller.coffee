App.UserCreateController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"