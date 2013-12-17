App.AccountController = Ember.ObjectController.extend
  actions:
    editAccount: ->
      @set 'isEditing', true
    acceptChanges: ->
      @set 'isEditing', false
      console.log 'Saving'
      @get("model").save()
      
  
  isEditing: false
  
  