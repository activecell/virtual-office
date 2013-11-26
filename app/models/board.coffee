VirtualOffice.Board = DS.Model.extend
  tasks: DS.hasMany 'task'
  name: DS.attr 'string'
  status: DS.attr 'string'
  
VirtualOffice.Board.FIXTURES = [
  id: 1
  name: "October 2013"
  status: "Completed"
  ,
  id: 2
  name: "Virtual assistant tasks"
  status: "Ongoing"
  ,
  id: 3
  name: "September 2013"
  status: "Complete"
  ,
  id: 4
  name: "August 2013"
  status: "Complete"
]