App.Router.map ->
  @resource "account"
  @resource "company", path: "/:company_id", ->
    @resource "clients"
    @resource "recipes", ->
      @resource "recipe", path: "/:recipe_id"
    @resource "resources"
    @resource "access"
    @resource "activity"

App.ApplicationRoute = Ember.Route.extend
  actions:
    openModal: (modalName, model) ->
      @controllerFor(modalName).set "model", model if model
      @render modalName,
        into: 'application'
        outlet: 'modal'

    closeModal: ->
      @disconnectOutlet
        parentView: 'application'
        outlet: 'modal'

class App.IndexRoute extends Ember.Route
  redirect: ->
    @transitionTo 'company'

class App.AccountRoute extends Ember.Route
  model: ->
    @store.find('user', 1)