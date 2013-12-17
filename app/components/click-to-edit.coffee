App.ClickToEditComponent = Ember.Component.extend
  isEditing: false
  actions:
    editMe: ->
      @set 'isEditing', true

    acceptChanges: ->
      @set 'isEditing', false
      @sendAction()