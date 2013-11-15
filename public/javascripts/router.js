VirtualOffice.Router.map(function () {
  this.resource('tasks', { path: '/' });
});

VirtualOffice.TasksRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('task');
  }
});