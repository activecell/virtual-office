class VirtualOffice.AccountRoute extends Ember.Route
  renderTemplate: ->
    super
    @render 'user',
      into: 'account'
      outlet: 'user'
    @render 'company',
      into: 'account'
      outlet: 'company'
    @render 'billing',
      into: 'account'
      outlet: 'billing'

  model: ->
    @store.find('user', 1)