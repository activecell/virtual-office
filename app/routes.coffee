VirtualOffice.Router.map ->
  @route "login",
    path: "/login"
    
  @route "index",
    path: "/"
    
  @resource "boards", ->
    @route "show", path: '/:board_id'
    
  @resource "recipes", ->
    @route "show"
    
  @route "resources",
    path: "/resources"
  
  @route "account",
    path: "/account"
  
  @route "discounts",
    path: "/discounts"