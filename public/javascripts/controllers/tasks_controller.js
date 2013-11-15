VirtualOffice.TasksController = Ember.ArrayController.extend({
  actions: {
    createTask: function () {
      // Get the task name set by the "New Task" text field
      var name = this.get('newName');
      if (!name.trim()) { return; }

      // Create the new Task model
      var task = this.store.createRecord('task', {
        name: name,
        status: 'Next up',
        avatarSrc: '',
        minutes: 20
      });

      // Clear the "New Task" text field
      this.set('newName', '');

      // Save the new model
      task.save();
    }
  }
});
