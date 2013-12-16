App.AccountController = Ember.ObjectController.extend
  actions:
    # edit actions
    editYou: ->
      @set 'isYouEditing', true
    editPassword: ->
      @set 'isPasswordEditing', true
    editCompany: ->
      @set 'isCompanyEditing', true
    
    # save actions
    saveYou: ->
      @set 'isYouEditing', false
    savePassword: ->
      @set 'isPasswordEditing', false
    saveCompany: ->
      @set 'isCompanyEditing', false
  
  isYouEditing: false
  isPasswordEditing: false
  isCompanyEditing: false