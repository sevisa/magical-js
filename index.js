const Person = require('./person')
const HogwartsHouse = require('./hogwarts-house')
const SortingHat = require('./sorting-hat')
const Database = require('./database.js')


// Class Person
harry = new Person('Harry Potter', false, true)
dumbledore = new Person('Albus Dumbledore', true, true)
malfoy = new Person('Draco Malfoy', false, true)
dudley = new Person('Dudley Vernon', false, false)
ron = new Person('Ron Weasley', false, true)
hermione = new Person('Hermione Granger', false, true)
snape = new Person('Severus Snape', true, true)
minerva = new Person('Minerva McGonagall', true, true)


//Class Hogwarts House
gryffindor = new HogwartsHouse('Gryffindor', 'lion')
ravenclaw = new HogwartsHouse('Ravenclaw', 'eagle')
slytherin = new HogwartsHouse('Slytherin', 'snake')
hufflepuff = new HogwartsHouse('Hufflepuff', 'badger')

//Class Sorting Hat
sortingHat = new SortingHat('Sorting Hat', [gryffindor, ravenclaw, slytherin, hufflepuff])


//ACTIONS
//   sortingHat.chooseHousefor(snape)
//   console.log(snape);
//   harry.bewitch(dudley)
//   dudley.bewitch(malfoy)
//   malfoy.win(1, slytherin)
//   harry.join(gryffindor)
  // malfoy.join(slytherin)
  // ron.join(gryffindor)
//   dudley.join(gryffindor)
//   malfoy.win(7, slytherin)
//   hermione.bewitch(dumbledore)
//   slytherin.printMemberNames()

console.log(sortingHat.chooseHatSong())


// Database.save('people.json', [harry, dumbledore, malfoy, dudley, hermione, snape, ron, minerva] )
// Database.save('hogwarts-houses.json', [gryffindor, ravenclaw, hufflepuff, slytherin] )
Database.save('sorting-hat.json', sortingHat )

// const loadedFile = Database.load('hogwarts-houses.json')
// console.log(loadedFile)