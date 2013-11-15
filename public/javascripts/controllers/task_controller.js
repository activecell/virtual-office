VirtualOffice.TaskController = Ember.ObjectController.extend({
  status: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('status');
    } else {
      // property being used as a setter
      model.set('status', value);
      model.save();
      return value;
    }
  }.property('model.status'),

  actions: {
     editTaskName: function () {
       this.set('isEditingName', true);
     }
   },

  isEditingName: false
});