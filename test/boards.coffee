describe "Task board list", ->
  it "should display task boards in a table"

  describe "Pagination", ->
    it "should display no pagination if there are 25 or fewer boards"
    it "should paginate if there are more than 25 boards"

  describe "Task board list rows", ->
    it "should list the board's name, recipe, and status"
    it "should link to the board"
    it "should link to the board's recipe"
    it "should display status in a label"

  describe "Adding a board", ->
    it "should display modal when the user clicks the add button"
    it "should ask the user for a name and whether the board is ongoing"
    it "should ask the user to optionally specify a recipe"
    it "has a link to the recipes list"
    it "creates the board and navigates to it"
    it "can cancel with ESC, the 'x', or the close button"

  describe "Deleting a board"
    it "should allow the user to delete a board with a REMOVE button in the row"
    it "should alert the user if the board has tasks"

describe "Task board view", ->
  it "should display the board name"
  it "should link back to the task board list"

  describe "Recipes", ->
    it "should display and link to the recipe if there's a recipe"
    it "should offer to create a recipe using this board if there's no recipe"

  describe "3 column view", ->
    it "should have 'Next up', 'In Progress', and 'Complete' columns"
    it "should allow the user to drag tasks to reorder within a column"
    it "should allow the user to drag tasks between columns"

describe "Tasks", ->

  describe "Single row view", ->
    it "should display the assignee avatar, name, and a label"
    it "should allow the user to reassign by clicking the avatar"
    it "should allow the user to re-label by clicking the label"
    it "should open the task modal by clicking the name"

  describe "Task modal", ->
    it "should update on blur with simple visual feedback"
    it "should allow name updates in the modal header"
    it "should allow updates to description, label, and assignee"
    it "should allow the user to upload a file"
    it "should allow the user to delete the task with the button in the footer"
    it "should allow the user to close with ESC, the 'x', or close button in the footer"

    describe "Task comments", ->
      it "should allow the user to comment"
      it "should display comments with avatars"
      it "should allow the user to reference another user with @ mentions"

  describe "Adding a tasks", ->
    it "should open a task dialog"
    it "should start with the cursor in the name box"
    it "should cancel with ESC the 'x', or close button in the footer"
    it "should insert a task at the bottom of the 'Next up' queue