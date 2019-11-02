module.exports = class SortingHat{
  constructor(name, houses, hatSongs) {
      this.name = name; // String
      this.houses = houses // array
      this.hatSongs = hatSongs //array
  }

  chooseHousefor(person) {
      let hatSong = this.chooseHatSong()
      let randomNumber = Math.floor(Math.random() * this.houses.length);
      let house = this.houses[randomNumber]
      let hasJoined = person.join(house)

      if(hasJoined) {
          console.log(person.name + '.... ' + hatSong.name + ' ' + house.name + ' !') 
      }
      
  }

  chooseHatSong() {
      let randomNumber = Math.floor(Math.random() * this.hatSongs.length);
      return this.hatSongs[randomNumber]
  }
}
