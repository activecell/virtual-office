describe "Resources", ->

  describe "Office manager", ->
    it "should display the manager with avatar, name, and desc"
    it "should have a table of line items"
    it "should display the base bookkeeping line in the table"

    describe "Bookkeeping add-ons", ->
      it "should have a link to get more bookkeeping add-ons"
      it "should display a modal with a list of add-ons"
      it "should link each add-on to its marketing page"
      it "should add lines with a selected add-ons"
      it "should show remove 'x' on hover and allow removal of add-on lines"

  describe "Activecell Doers", ->
    it "should allow the user to select the volume of Doers with the slider"
    it "should update price accordingly"
    it "should link the doers marketing page"

  describe "Specialists", ->
    it "should have a table of line items"
    it "should have a link to invite specialists"
    it "should display a modal"

    describe 'Activecell-provided specialists', ->
      it "modal should display a list of Activecell provided specialists with prices"
      it "should link each specialist to their expert page"
      it "should add lines with a selected add-ons"
      it "should show remove 'x' on hover and allow removal of add-on lines"

    describe "Invite your own specialists", ->
      it "should allow the user to specify their own experts"
      it "should specific category, name, email, phone for each"

  describe "Tools", ->
    it "should have a table of line items"
    it "should show QB with a link"
    it "should automatically show base categories with 'set up now' as required"

    describe "Tools add-ons", ->
      it "should have a link to get more add-ons"
      it "should display a modal with a list of add-ons"
      it "should link each add-on to its marketing page"
      it "should add lines with a selected add-ons"
      it "should show remove 'x' on hover and allow removal of add-on lines"

  describe "Totals", ->
    it "should tabulate totals as changes are made"
    it "should show discount from discount page (and link to it)"
    it "should calculate final total after discount"

    describe 'apply changes button'
      it "should disable if no changes have been made"
      it "should enable if changes have been made"
      it "should record changes on click, then disable"
      it "should push changes to recurly if subscription is live"
