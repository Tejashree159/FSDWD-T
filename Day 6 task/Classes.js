class Person {
  name;
  age;
  location;
  
  constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
  }

  selfIntro() {
      return `Hi! I'm ${this.name}. I am ${this.age} years old and from ${this.location}.`;
  }
}

const john = new Person("John", 54, "Chennai");

document.getElementById("output").innerText = john.selfIntro();

class Uber {
  baseFare;
  costPerKm;
  costPerMinute;
  distance;
  time;

  constructor(baseFare, costPerKm, costPerMinute, distance, time) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
      this.distance = distance;
      this.time = time;
  }

  calculatePrice() {
      const distanceCost = this.distance * this.costPerKm;
      const timeCost = this.time * this.costPerMinute;
      const totalFare = this.baseFare + distanceCost + timeCost;
      return totalFare;
  }
}

const myRide = new Uber(50, 10, 2, 15, 30);

console.log(`The total fare for your Uber ride is ₹${myRide.calculatePrice()}.`);
document.getElementById("output").innerText += `\nThe total fare for your Uber ride is ₹${myRide.calculatePrice()}.`;
