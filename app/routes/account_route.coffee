class App.AccountRoute extends Ember.Route
  renderTemplate: ->
    super
    @render 'account/user',
      into: 'account'
      outlet: 'user'
    @render 'account/company',
      into: 'account'
      outlet: 'company'
    @render 'account/billing',
      into: 'account'
      outlet: 'billing'

  model: ->
    @store.find('user', 1)