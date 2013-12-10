App.Recipe = DS.Model.extend
  company: DS.belongsTo 'company'
  tasks: DS.hasMany 'task', async:true
  name: DS.attr 'string'
  frequency: DS.attr 'string'
  timeframe: DS.attr 'number'
  active: DS.attr 'boolean'

App.Recipe.FIXTURES = [
  id: 1
  name: "Touch-up (transactions and bills)"
  frequency: "Weekly"
  timeframe: 5
  tasks: [1,2,3,4,5,6]
  active: true
,
  id: 2
  name: "Review & reconcile"
  frequency: "Monthly"
  timeframe: 5
  tasks: [7,8,9,10,11,12,13]
  active: true
,
  id: 3
  name: "Forecast review"
  frequency: "Quarterly"
  timeframe: 1
  tasks: []
  active: false
,
  id: 4
  name: "Update competitive analysis"
  frequency: "Quarterly"
  timeframe: 15
  tasks: []
  active: true
,
  id: 5
  name: "Build market survey for a new product"
  frequency: "As needed"
  tasks: []
  active: true
]