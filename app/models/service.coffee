App.Service = DS.Model.extend
  company: DS.belongsTo 'company'
  category: DS.attr 'string'
  name: DS.attr 'string'
  url: DS.attr 'string'
  price: DS.attr 'number'

App.Service.FIXTURES = [
  id: 1
  company: 1
  category: 'Electronic signatures'
  name: 'Right Signature'
  url: 'www.google.com'
  price: 12.32
,
  id: 2
  company: 1
  category: 'Accounts receivable'
  name: 'Bill.com'
  url: 'www.google.com'
  price: 12.32
,
  id: 3
  company: 1
  category: 'Accounts payable'
  name: 'Bill.com'
  url: 'www.google.com'
  price: 12.32
,
  id: 4
  company: 1
  category: 'Project management'
  name: 'Basecamp'
  url: 'www.google.com'
  price: 12.32
,
  id: 5
  company: 1
  category: 'Payroll'
  name: 'Zen Payroll'
  url: 'www.google.com'
  price: 12.32
,
  id: 6
  company: 1
  category: 'File management'
  name: 'Dropbox'
  url: 'www.google.com'
  price: 12.32
,
  id: 7
  company: 1
  category: 'Document scanning'
  name: 'Shoeboxed'
  url: 'www.google.com'
  price: 12.32
]