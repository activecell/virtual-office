App.Company = DS.Model.extend
  name: DS.attr 'string'
  slug: DS.attr 'string'
  users: DS.hasMany 'user', async:true
  clients: DS.hasMany 'company', async:true
  parent: DS.belongsTo 'company'
  lastFour: DS.attr 'number'
  creditType: DS.attr 'string'

App.Company.FIXTURES = [
  id: 1
  name: "Sound Advice"
  slug: "soundadvice"
  users: [1,2,3]
  clients: [2,3,4,5]
  creditType: 'Amex'
  lastFour: 1003
,
  id: 2
  name: "Sterling Cooper"
  slug: "sterling-cooper"
  users: [4,5,6]
  parent: 1
,
  id: 3
  name: "Client 3"
  slug: "client3"
  parent: 1
,
  id: 4
  name: "Client 4"
  slug: "client4"
  parent: 1
,
  id: 5
  name: "Client 5"
  slug: "client5"
  parent: 1
]