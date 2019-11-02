module.exports = class SortingHat{
  constructor(name, houses) {
      this.name = name; // String
      this.houses = houses // array
      this.hatSongs = [
          "... Hmm. Difficult. Very difficult. Plenty of courage, I see. Not a bad mind either. There\'s talent, oh my goodness, yes — and a nice thirst to prove yourself, now that\'s interesting... So where shall I put you?...You are a", 
          "Now slip me snug about your ears, I\'ve never yet been wrong, I\'ll have a look inside your mind and tell where you belong!.....You are a", 
          "Now the Sorting Hat is here. And you all know the score: I sort you into Houses. Because that is what I\'m for......You are a"
      ] //array
  }

  chooseHousefor(person) {
      let hatSong = this.chooseHatSong()
      let randomNumber = Math.floor(Math.random() * this.houses.length);
      let house = this.houses[randomNumber]
      let hasJoined = person.join(house)

      if(hasJoined) {
          console.log(`${person.name} ... ${hatSong.name} ${house.name}!`) 
      }
      
  }

  chooseHatSong() {
      let randomNumber = Math.floor(Math.random() * this.hatSongs.length);
      return this.hatSongs[randomNumber]
  }
}
