App.SortableListGroup = Ember.View.extend
  didInsertElement: ->
    $('.sortable').sortable()