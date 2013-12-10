App.ClientDeleteController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"