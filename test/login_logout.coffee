# joan is an admin for a firm called connected bookkeepers
# joan has an employee named peggy olson
# joan has a client called Sterling Cooper
# Sterling Cooper has employees named Don Draper and Roger Sterling

describe 'create account', ->

#   "joan navigates to cb.activecell.dev", ->
#     it "should redirect to www.activecell.dev"
# 
#   joan navigates to www.activecell.dev
#   it should display the marketing page
# 
#   joan clicks register link
#   it should display the register 1 page
#   it should ask for an email, password, and confirmation
# 
#   joan enters "joan@connectedbookkeepers.com"
#   joan enters 'magicalpassword01' twice
#   joan clicks next
#   it should display the register 2 page
#   it should ask for name, company, and subdomain
# 
#   joan enters 'Joan Holloway'
#   joan enters 'Connected Bookkeepers'
#   joan enters 'cb'
#   joan clicks "create my account"
# 
#   it should display a message about an email sent to confirm her account
#   it should send joan an email
#   
#   joan navigates to the log in page
#   it should ask for an email and password
#   
#   joan enters "joan@connectedbookkeepers.com"
#   joan enters 'magicalpassword01'
#   joan clicks "log in securely"
#   it should display a message about an email sent to confirm her account
#   it should provide a button to resend the email confirmation
#   
#   joan clicks the link in the old email
#   it should display a message that the email link has expired
#   it should provide a button to resend the email confirmation
#   
#   joan clicks the link in the new email
#   it should log joan in
#   it should navigate to cb.activecell.dev
#   it should display the clients page
#   the clients list should be empty
#   
#   joan navigates to the accounts page
#   it should display the user and company info she provided
#   
# describe 'customize css', ->
#   joan is logged in and viewing the accounts page
#   joan adds custom css as text to a text area field
#   joan clicks save
#   it should display updated css
#   
# describe 'log in, log out', ->
#   joan is logged in and viewing the accounts page
#   joan clicks image in the header and clicks log out
#   it should log joan out
#   it should navigate to cb.activecell.dev
#   it should display the log in page
#   it should include the customized css on the log in page
#   
#   joan navigates to the register page
#   it should not display the customized css
#   
#   joan navigates to the log in page
#   it should include the customized css on the log in page
#   it should ask for an email and password
#   
#   joan enters "joan@connectedbookkeepers.com"
#   joan enters 'magicalpassword01'
#   joan clicks "log in securely"
#   it should log joan in
#   it should navigate to cb.activecell.dev
#   it should display the clients page
#   the clients list should be empty
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
#   describe "Quickbooks SSO", ->
#     it "should display Intuit's SSO link on the login page"
#     it "should process Intuit's SSO for authentication"
#     it "should identify the user and current company without connecting to data"
# 
#   describe "Create user as required", ->
#     it "should log the user in if the user exists"
#     it "should create a new user if the login doesn't exist"
#     it "should capture name, email upon creating a user"
# 
#   describe "Intuit blue dot menu,", ->
#     it "should display the Intuit blue dot menu after login"
#     it "should allow the user to switch companies"
#     it "should create a company if the user switches to a company that doesn't exist"
# 
#   describe "Company creation", ->
# 
#     describe "Create company as required", ->
#       it "should log the user into the current company if it exists"
#       it "should create a new company if the current company doesn't exist"
#       it "should capture company name upon creating a company"
# 
#     describe "Creat onboarding task board on create", ->
#       it "should create the onboarding task board when the company is created"
#       it "should include onboarding tasks"
# 
# describe "Logout", ->
#   it "should allow the user to log out using the blue dot menu"
#   it "should allow the user to log out from the gear menu"