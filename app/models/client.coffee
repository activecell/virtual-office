VirtualOffice.Client = DS.Model.extend
  name: DS.attr 'string'
  slug: DS.attr 'string'

VirtualOffice.Client.FIXTURES = [
  id: 1
  name: "Sterling Cooper"
  slug: "sterling-cooper"
,
  id: 2
  name: "Client 2"
  slug: "client2"
,
  id: 3
  name: "Client 3"
  slug: "client3"
,
  id: 4
  name: "Client 4"
  slug: "client4"
]