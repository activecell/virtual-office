App.Company = DS.Model.extend
  name: DS.attr 'string'
  slug: DS.attr 'string'
  lastFour: DS.attr 'number'
  creditType: DS.attr 'string'
  users: DS.hasMany 'user', async:true
  clients: DS.hasMany 'company', async:true
  parent: DS.belongsTo 'company'
  recipes: DS.hasMany 'recipe', async:true
  services: DS.hasMany 'service', async:true
  activities: DS.hasMany 'activity', async:true

App.Company.FIXTURES = [
  id: 1
  name: "Sound Advice"
  slug: "soundadvice"
  creditType: 'Amex'
  lastFour: 1003
  users: [1,2,3]
  clients: [2,3,4,5]
  recipes: [1,2,3,4]
  services: [1,2,3,4,5,6,7]
  activities: [1,2,3,4,5,6,7,8]
,
  id: 2
  name: "Sterling Cooper"
  slug: "sterling-cooper"
  users: [4,5,6]
  parent: 1
  recipes: [2,3,5]
  services: [1,2,6,7]
  activities: [1,2,3]
,
  id: 3
  name: "Client 3"
  slug: "client3"
  parent: 1
  recipes: [3,4]
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