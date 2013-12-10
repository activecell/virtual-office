class App.CompanyRoute extends Ember.Route
  model: (params) ->
    @store.find 'company', params.company_id or 1