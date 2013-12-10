App.Task = DS.Model.extend
  name: DS.attr 'string'
  avatarSrc: DS.attr 'string'
  minutes: DS.attr 'number'

App.Task.FIXTURES = [
  id: 1
  name: "Process Bill.com inbox"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 20
,
  id: 2
  name: "Process accounting email inbox"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 20
,
  id: 3
  name: "Process bills/receipts in Dropbox folder"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 20
,
  id: 4
  name: "Code new transactions based on rulebook"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 60
,
  id: 5
  name: "Add alerts about disconnected bank accounts"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 5
,
  id: 6
  name: "Add alerts about unknown/unexpected transactions"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 5
,
  id: 7
  name: "Download or confirm client's download of all bank statements to reconcile"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 20
,
  id: 8
  name: "Reconcile bank statements, identifying and resolving variances where possible based on the rulebook"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 60
,
  id: 9
  name: "Add alerts for any unresolved discrepancies"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 5
,
  id: 10
  name: "Compare previous month P&L and Balance sheet to current month"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 40
,
  id: 11
  name: "Submit new P&L, Balance Sheet, and Exception report to manager for review"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 10
,
  id: 12
  name: "Resolve known issues, review reports with client, provide feedback to the team"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 30
,
  id: 13
  name: "Integrate feedback from manager and client"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 30
]