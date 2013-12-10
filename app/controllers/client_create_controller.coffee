App.ClientCreateController = Ember.ObjectController.extend
  actions:
    close: ->
      @send "closeModal"