App.ModalView = Ember.View.extend
  didInsertElement: ->
    @$('.modal').modal('show')
    parent = @get('parentView')
    @$('.modal').one "hidden.bs.modal", ->
      parent.controller.send('closeModal')

  layoutName: 'modal_layout'

  actions:
    close: ->
      @$('.modal').modal('hide')