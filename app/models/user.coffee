App.User = DS.Model.extend
  name: DS.attr 'string'
  email: DS.attr 'string'
  emailMe: DS.attr 'boolean'
  password: DS.attr 'string'
  passwordConf: DS.attr 'string'
  company: DS.belongsTo 'company'
  role: DS.attr 'string'
  lastLoggedInString: DS.attr 'string'

App.User.FIXTURES = [
  id: 1
  name: "Jason Hill"
  email: "hill@soundadvice.jobs"
  emailMe: true
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 1
  role: "Admin"
  lastLoggedInString: "Oct 1, 2013"
,
  id: 2
  name: "Chris Gibson"
  email: "cg@soundadvice.jobs"
  emailMe: true
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 1
  role: "Staff"
  lastLoggedInString: "Oct 1, 2013"
,
  id: 3
  name: "Leo Chan"
  email: "lc@soundadvice.jobs"
  emailMe: true
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 1
  role: "Staff"
  lastLoggedInString: "Oct 1, 2013"
,
  id: 4
  name: "Don Draper"
  email: "don.draper@sterlingcooper.com"
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 2
  role: "Admin"
  lastLoggedInString: "Oct 1, 2013"
,
  id: 5
  name: "Roger Sterling"
  email: "roger.sterling@sterlingcooper.com"
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 2
  role: "User"
  lastLoggedInString: "Oct 1, 2013"
,
  id: 6
  name: "Peggy Olson"
  email: "peggy.olson@sterlingcooper.com"
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  company: 2
  role: "User"
  lastLoggedInString: "Oct 1, 2013"
]