App.Activity = DS.Model.extend
  description: DS.attr 'string'
  dateString: DS.attr 'string'
  status: DS.attr 'string'

App.Activity.FIXTURES = [
  id: 1
  description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Dropbox</a>"
  dateString: "Oct 1, 2013"
  status: 'Pending'
,
  id: 2
  description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Other service</a></td"
  dateString: "Oct 1, 2013"
  status: 'Complete'
,
  id: 3
  description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>A different service</a>"
  dateString: "Oct 1, 2013"
  status: 'Complete'
,
  id: 4
  description: "Added <a href='mailto:don.draper@sterlingcooper.com'>Don Draper</a> to <a href='http://www.dropbox.com'>Yet another service</a>"
  dateString: "Oct 1, 2013"
  status: 'Complete'
,
  id: 5
  description: "Removed <a href='mailto:roger.sterling@sterlingcooper.com'>Roger Sterling</a> from <a href='http://www.dropbox.com'>Dropbox</a>"
  dateString: "Oct 1, 2013"
  status: 'Complete'
,
  id: 6
  description: "Removed <a href='mailto:roger.sterling@sterlingcooper.com'>Roger Sterling</a> from <a href='http://www.dropbox.com'>Another service</a>"
  dateString: "Oct 1, 2013"
  status: 'Complete'
,
  id: 7
  description: "Created task <a href='http://www.zendesk.com'>Process Bill.com Inbox</a> from recipe <a href='www.activecell.com'>Monthly bookkeeping</a>"
  dateString: "Sep 4, 2013"
  status: 'Complete'
,
  id: 8
  description: "Created task <a href='http://www.zendesk.com'>Reconcile bank statements</a> from recipe <a href='www.activecell.com'>Monthly bookkeeping</a>"
  dateString: "Sep 4, 2013"
  status: 'Complete'
]