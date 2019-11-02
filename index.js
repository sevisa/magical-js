const Person = require('./person')
const HogwartsHouse = require('./hogwarts-house')
const SortingHat = require('./sorting-hat')
const HatSong = require('./sorting-hat')

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

//Class HatSong
hatSong1 = new HatSong('... Hmm. Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There\'s talent, oh my goodness, yes — and a nice thirst to prove yourself, now that\'s interesting... So where shall I put you?...You are a')
hatSong2 = new HatSong('Now slip me snug about your ears, I\'ve never yet been wrong, I\'ll have a look inside your mind and tell where you belong!.....You are a')
hatSong3 = new HatSong('Now the Sorting Hat is here. And you all know the score: I sort you into Houses. Because that is what I\'m for......You are a')


//Class Sorting Hat
sortingHat = new SortingHat('Sorting Hat', [gryffindor, ravenclaw, slytherin, hufflepuff], [hatSong1, hatSong2, hatSong3])


//ACTIONS
//   sortingHat.chooseHousefor(snape)
//   console.log(snape);
//   harry.bewitch(dudley)
//   dudley.bewitch(malfoy)
//   malfoy.win(1, slytherin)
//   harry.join(gryffindor)
//   malfoy.join(slytherin)
//   ron.join(gryffindor)
//   dudley.join(gryffindor)
//   malfoy.win(7, slytherin)
//   hermione.bewitch(dumbledore)
//   slytherin.printMemberNames()

console.log(sortingHat.chooseHatSong())
