App.Recipe = DS.Model.extend
  tasks: DS.hasMany 'task', async:true
  name: DS.attr 'string'
  frequency: DS.attr 'string'
  timeframe: DS.attr 'number'

App.Recipe.FIXTURES = [
  id: 1
  name: "Touch-up (transactions and bills)"
  frequency: "Weekly"
  timeframe: 5
  tasks: [1,2,3,4,5,6]
,
  id: 2
  name: "Review & reconcile"
  frequency: "Monthly"
  timeframe: 5
  tasks: [7,8,9,10,11,12,13]
,
  id: 3
  name: "Forecast review"
  frequency: "Quarterly"
  timeframe: 1
  tasks: []
,
  id: 4
  name: "Update competitive analysis"
  frequency: "Quarterly"
  timeframe: 15
  tasks: []
,
  id: 5
  name: "Build market survey for a new product"
  frequency: "As needed"
  tasks: []
]