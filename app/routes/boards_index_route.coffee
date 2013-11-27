class VirtualOffice.BoardsIndexRoute extends Ember.Route
  model: ->
    @store.findAll('board')
    
  setupController: (controller, board) ->
    controller.set 'model', board