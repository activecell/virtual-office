(function() {
  describe("Account page", function() {
    describe("You", function() {
      it("should show your name and email");
      describe("Gravatar", function() {
        it("should display your gravatar if available");
        it("should display missing avatar if unavailable");
        return it("should link to gravatar on image click");
      });
      return describe("Email settings", function() {
        it("should be able to email users when boards are complete");
        it("should be able to email users referenced in a comment");
        return it("should be able to email users when comments are made on assigned tasks");
      });
    });
    return describe("Your company", function() {
      describe("User list", function() {
        it("should display a table of users retrieved from Quickbooks");
        it("should display name and last login date/time");
        it("should offer to invite users who have never logged in");
        return it("should send an email on invite");
      });
      describe("Credit card update", function() {
        it("should display partial info on a provided credit card");
        it("should display a button to update credit card");
        it("should launch the recurly modal to update the credit card");
        it("should confirm current resources before charging");
        return it("should charge immediately and then set monthly recurrence");
      });
      return describe("Close account", function() {
        it("should confirm change");
        it("should remove company data");
        return it("should cancel recurly subscription");
      });
    });
  });

}).call(this);

(function() {
  describe("Task board list", function() {
    it("should display task boards in a table");
    describe("Pagination", function() {
      it("should display no pagination if there are 25 or fewer boards");
      return it("should paginate if there are more than 25 boards");
    });
    describe("Task board list rows", function() {
      it("should list the board's name, recipe, and status");
      it("should link to the board");
      it("should link to the board's recipe");
      return it("should display status in a label");
    });
    describe("Adding a board", function() {
      it("should display modal when the user clicks the add button");
      it("should ask the user for a name and whether the board is ongoing");
      it("should ask the user to optionally specify a recipe");
      it("has a link to the recipes list");
      it("creates the board and navigates to it");
      return it("can cancel with ESC, the 'x', or the close button");
    });
    return describe("Deleting a board", function() {
      it("should allow the user to delete a board with a REMOVE button in the row");
      return it("should alert the user if the board has tasks");
    });
  });

  describe("Task board view", function() {
    it("should display the board name");
    it("should link back to the task board list");
    describe("Recipes", function() {
      it("should display and link to the recipe if there's a recipe");
      return it("should offer to create a recipe using this board if there's no recipe");
    });
    return describe("3 column view", function() {
      it("should have 'Next up', 'In Progress', and 'Complete' columns");
      it("should allow the user to drag tasks to reorder within a column");
      return it("should allow the user to drag tasks between columns");
    });
  });

  describe("Tasks", function() {
    describe("Single row view", function() {
      it("should display the assignee avatar, name, and a label");
      it("should allow the user to reassign by clicking the avatar");
      it("should allow the user to re-label by clicking the label");
      return it("should open the task modal by clicking the name");
    });
    describe("Task modal", function() {
      it("should update on blur with simple visual feedback");
      it("should allow name updates in the modal header");
      it("should allow updates to description, label, and assignee");
      it("should allow the user to upload a file");
      it("should allow the user to delete the task with the button in the footer");
      it("should allow the user to close with ESC, the 'x', or close button in the footer");
      return describe("Task comments", function() {
        it("should allow the user to comment");
        it("should display comments with avatars");
        return it("should allow the user to reference another user with @ mentions");
      });
    });
    return describe("Adding a tasks", function() {
      it("should open a task dialog");
      it("should start with the cursor in the name box");
      it("should cancel with ESC the 'x', or close button in the footer");
      return it("should insert a task at the bottom of the 'Next up' queue");
    });
  });

}).call(this);

(function() {
  describe("Discount page", function() {
    describe("Progress meter", function() {
      it("should describe the program succinctly");
      return it("should display the company's current progress");
    });
    return describe("Referral fulfillment", function() {
      it("should provide a code and link");
      it("should provide an email form");
      it("should provide social links");
      return it("should solicit a review on Intuit's App Center");
    });
  });

}).call(this);

(function() {
  describe("Login", function() {
    describe("Quickbooks SSO", function() {
      it("should display Intuit's SSO link on the login page");
      it("should process Intuit's SSO for authentication");
      return it("should identify the user and current company without connecting to data");
    });
    describe("Create user as required", function() {
      it("should log the user in if the user exists");
      it("should create a new user if the login doesn't exist");
      return it("should capture name, email upon creating a user");
    });
    describe("Intuit blue dot menu,", function() {
      it("should display the Intuit blue dot menu after login");
      it("should allow the user to switch companies");
      return it("should create a company if the user switches to a company that doesn't exist");
    });
    return describe("Company creation", function() {
      describe("Create company as required", function() {
        it("should log the user into the current company if it exists");
        it("should create a new company if the current company doesn't exist");
        return it("should capture company name upon creating a company");
      });
      return describe("Creat onboarding task board on create", function() {
        it("should create the onboarding task board when the company is created");
        return it("should include onboarding tasks");
      });
    });
  });

  describe("Logout", function() {
    it("should allow the user to log out using the blue dot menu");
    return it("should allow the user to log out from the gear menu");
  });

}).call(this);

(function() {
  describe("Navigation", function() {
    it("should link to the marketing site from the brand div");
    it("should link to the task list from 'Task boards'");
    it("should link to the recipe list from 'Recipes'");
    it("should link to the resources page from 'Resources'");
    it("should link to the discount page from 'Discount:'");
    it("should display the current discount in the progress meter");
    it("should link to the account page from the dropdown in the gears");
    return it("should allow logout from the dropdown in the gears");
  });

}).call(this);

(function() {
  describe("Recipe list", function() {
    it("should display recipes in a table");
    describe("Pagination", function() {
      it("should display no pagination if there are 25 or fewer recipes");
      return it("should paginate if there are more than 25 recipes");
    });
    describe("Recipe list rows", function() {
      it("should list the recipe's name, frequency, and timing");
      it("should link to the recipe");
      return it("should allow the user to delete a recipe with a REMOVE button in the row");
    });
    return describe("Adding a recipe", function() {
      it("should display modal when the user clicks the add button");
      it("should ask the user for a name, frequency, and timing");
      it("creates the recipe and navigates to it");
      return it("can cancel with the ESC, 'x', or the close button");
    });
  });

  describe("Recipe view", function() {
    it("should display the recipe name");
    it("should link back to the recipe list");
    it("should allow the user to update frequency and timing");
    return describe("Task list", function() {
      it("should have a list of tasks");
      it("should allow the user to drag tasks to reorder within a column");
      return it("should allow the user to add a task");
    });
  });

}).call(this);

(function() {
  describe("Resources", function() {
    describe("Office manager", function() {
      it("should display the manager with avatar, name, and desc");
      it("should have a table of line items");
      it("should display the base bookkeeping line in the table");
      return describe("Bookkeeping add-ons", function() {
        it("should have a link to get more bookkeeping add-ons");
        it("should display a modal with a list of add-ons");
        it("should link each add-on to its marketing page");
        it("should add lines with a selected add-ons");
        return it("should show remove 'x' on hover and allow removal of add-on lines");
      });
    });
    describe("Activecell Doers", function() {
      it("should allow the user to select the volume of Doers with the slider");
      it("should update price accordingly");
      return it("should link the doers marketing page");
    });
    describe("Specialists", function() {
      it("should have a table of line items");
      it("should have a link to invite specialists");
      it("should display a modal");
      describe('Activecell-provided specialists', function() {
        it("modal should display a list of Activecell provided specialists with prices");
        it("should link each specialist to their expert page");
        it("should add lines with a selected add-ons");
        return it("should show remove 'x' on hover and allow removal of add-on lines");
      });
      return describe("Invite your own specialists", function() {
        it("should allow the user to specify their own experts");
        return it("should specific category, name, email, phone for each");
      });
    });
    describe("Tools", function() {
      it("should have a table of line items");
      it("should show QB with a link");
      it("should automatically show base categories with 'set up now' as required");
      return describe("Tools add-ons", function() {
        it("should have a link to get more add-ons");
        it("should display a modal with a list of add-ons");
        it("should link each add-on to its marketing page");
        it("should add lines with a selected add-ons");
        return it("should show remove 'x' on hover and allow removal of add-on lines");
      });
    });
    return describe("Totals", function() {
      it("should tabulate totals as changes are made");
      it("should show discount from discount page (and link to it)");
      it("should calculate final total after discount");
      return describe('apply changes button', function() {
        it("should disable if no changes have been made");
        it("should enable if changes have been made");
        it("should record changes on click, then disable");
        return it("should push changes to recurly if subscription is live");
      });
    });
  });

}).call(this);
