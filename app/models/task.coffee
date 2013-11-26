VirtualOffice.Task = DS.Model.extend
  board: DS.belongsTo 'board'
  name: DS.attr 'string'
  status: DS.attr 'string'
  avatarSrc: DS.attr 'string'
  minutes: DS.attr 'number'
  
VirtualOffice.Task.FIXTURES = [
  id: 1
  name: "Jack-in-the-box"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 8
  ,
  id: 2
  name: "Look nasty and stuff"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/e55c09439e68fbaaf1231c9e725a8bdc?d=https%3A%2F%2Fidenticons.github.com%2F6789e600d8abaf5d52d427355d513fd2.png&s=20"
  minutes: 1
  ,
  id: 3
  name: "Cocoon 'em in gaffer tape"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 34
  ,
  id: 4
  name: "Nick the van"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 4
  ,
  id: 5
  name: "Swap the gear"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 2
  ,
  id: 6
  name: "Bring it all back here"
  status: "Completed"
  avatarSrc: "https://1.gravatar.com/avatar/8a81be5788345ffdf759aeae606ff716?d=https%3A%2F%2Fidenticons.github.com%2F0fd1f4d6a647daf66b2a3f79ecd7eb36.png&s=20"
  minutes: 10
]