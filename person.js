const harryPotterSpells = require('harry-potter-spells')
// console.log(harryPotterSpells.random())

module.exports = class Person {
  constructor(name, isTeacher, isWizard) {
      this.name = name;
      this.isTeacher = isTeacher;
      this.isWizard = isWizard;
  }

  join(hogwartsHouse) {
      if (this.isWizard === true){
          this.hogwartsHouse = hogwartsHouse
          hogwartsHouse.members.push(this.name) 
          return true;
      } else {
          console.log( this.name + ' :Entrance just with magic membercard!')
          return false;
      }

  }

  bewitch(person){
      if (this.isWizard === true){
          console.log(this.name + ' bewitches ' + person.name + ' with ' + harryPotterSpells.random().name)
      } else {
          console.log('Nice try ' + this.name + '. But you are a Muggel, not a Wizard!')
      }
  }

//   Not working right now
//   win(points, house) {
//     house.housepoints =  house.housepoints + points;
//   }
}