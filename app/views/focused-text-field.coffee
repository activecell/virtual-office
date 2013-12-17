App.FocusedTextFieldView = Ember.TextField.extend
  didInsertElement: ->
    @$().focus()

Ember.Handlebars.helper "focused-text-field", App.FocusedTextFieldView