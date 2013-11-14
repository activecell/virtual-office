describe "Account page", ->

  describe "You", ->
    it "should show your name and email"

    describe "Gravatar", ->
      it "should display your gravatar if available"
      it "should display missing avatar if unavailable"
      it "should link to gravatar on image click"

    describe "Email settings", ->
      it "should be able to email users when boards are complete"
      it "should be able to email users referenced in a comment"
      it "should be able to email users when comments are made on assigned tasks"

  describe "Your company", ->

    describe "User list", ->
      it "should display a table of users retrieved from Quickbooks"
      it "should display name and last login date/time"
      it "should offer to invite users who have never logged in"
      it "should send an email on invite"

    describe "Credit card update", ->
      it "should display partial info on a provided credit card"
      it "should display a button to update credit card"
      it "should launch the recurly modal to update the credit card"
      it "should confirm current resources before charging"
      it "should charge immediately and then set monthly recurrence"

    describe "Close account", ->
      it "should confirm change"
      it "should remove company data"
      it "should cancel recurly subscription"