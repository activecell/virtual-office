App.Router.map ->
  @route "account"
  @resource "company", path: "/:company_id", ->
    @route "clients"
    @route "recipes"
    @resource "recipe", path: "/recipe/:recipe_id"
    @route "resources"
    @route "access"
    @route "activity"