module.exports = class HogwartsHouse {
  constructor(name, heraldicAnimal) {
      this.name = name;
      this.heraldicAnimal = heraldicAnimal;
      this.housepoints = 0;
      this.members = []

  }
  printMemberNames() {
      this.members.forEach(printName);
  }
}

printName = person => console.log(person.name)
// printAttendeeNames() {
//   this.attendees.forEach(printName)
// }