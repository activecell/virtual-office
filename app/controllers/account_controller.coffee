App.AccountController = Ember.ObjectController.extend
  actions:
    # We have some tricky nonsense for the subdomain because of its custom
    # formatting.
    editSubdomain: ->
      @set 'isEditingSubdomain', true
    acceptChanges: ->
      @set 'isEditingSubdomain', false
      @get("model").save()


  isEditingSubdomain: false

