class VirtualOffice.BoardsIndexRoute extends Ember.Route
  model: ->
    @store.find('board')
    
  setupController: (controller, board) ->
    controller.set 'model', board