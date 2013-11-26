class VirtualOffice.BoardsShowRoute extends Ember.Route
  model: ->
    store = @get 'store'
    store.find('task')
    
  setupController: (controller, task) ->
    controller.set 'model', task