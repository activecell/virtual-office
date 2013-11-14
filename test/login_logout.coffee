describe "Login", ->

  describe "Quickbooks SSO", ->
    it "should display Intuit's SSO link on the login page"
    it "should process Intuit's SSO for authentication"
    it "should identify the user and current company without connecting to data"

  describe "Create user as required", ->
    it "should log the user in if the user exists"
    it "should create a new user if the login doesn't exist"
    it "should capture name, email upon creating a user"

  describe "Intuit blue dot menu," ->
    it "should display the Intuit blue dot menu after login"
    it "should allow the user to switch companies"
    it "should create a company if the user switches to a company that doesn't exist"

  describe "Company creation", ->

    describe "Create company as required", ->
      it "should log the user into the current company if it exists"
      it "should create a new company if the current company doesn't exist"
      it "should capture company name upon creating a company"

    describe "Creat onboarding task board on create", ->
      it "should create the onboarding task board when the company is created"
      it "should include onboarding tasks"

describe "Logout", ->
  it "should allow the user to log out using the blue dot menu"
  it "should allow the user to log out from the gear menu"