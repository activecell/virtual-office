VirtualOffice.Router.map ->
  # /
  # /clients
  # /client/sterlingcooper/recipes
  # /client/sterlingcooper/recipe/1
  # /client/sterlingcooper/resources
  # /client/sterlingcooper/access
  # /recipes
  # /recipe/1
  # /resources
  # /access
  # /account

  @route "clients"
  @resource "client",
      path: "/client/:client_slug"
    , ->

      @route "recipes"
      @resource "recipe", path: "/recipe/:recipe_id"

      @route "resources"
      @route "access"

  @route "recipes"
  @resource "recipe", path: "/recipe/:recipe_id"

  @route "resources"
  @route "access"
  @route "activity"

  @route "account"