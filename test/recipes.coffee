describe "Recipe list", ->
  it "should display recipes in a table"

  describe "Pagination", ->
    it "should display no pagination if there are 25 or fewer recipes"
    it "should paginate if there are more than 25 recipes"

  describe "Recipe list rows", ->
    it "should list the recipe's name, frequency, and timing"
    it "should link to the recipe"
    it "should allow the user to delete a recipe with a REMOVE button in the row"

  describe "Adding a recipe", ->
    it "should display modal when the user clicks the add button"
    it "should ask the user for a name, frequency, and timing"
    it "creates the recipe and navigates to it"
    it "can cancel with the ESC, 'x', or the close button"

describe "Recipe view", ->
  it "should display the recipe name"
  it "should link back to the recipe list"
  it "should allow the user to update frequency and timing"

  describe "Task list", ->
    it "should have a list of tasks"
    it "should allow the user to drag tasks to reorder within a column"
    it "should allow the user to add a task"