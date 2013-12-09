VirtualOffice.User = DS.Model.extend
  name: DS.attr 'string'
  email: DS.attr 'string'
  emailMe: DS.attr 'boolean'
  password: DS.attr 'string'
  passwordConf: DS.attr 'string'
  companyName: DS.attr 'string'
  subdomain: DS.attr 'string'
  lastFour: DS.attr 'number'
  creditType: DS.attr 'string'

VirtualOffice.User.FIXTURES = [
  id: 1
  name: "Jason Hill"
  email: "jason@hill.com"
  emailMe: true
  password: "PeachesAndCream01"
  passwordConf: "PeachesAndCream01"
  companyName: "Sound Advice"
  subdomain: 'soundadvice'
  creditType: 'Amex'
  lastFour: 1003
]