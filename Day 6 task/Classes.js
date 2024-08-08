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
    console.log(`Hi! I'm ${this.name}. I am ${this.age} years old and from ${this.location}.`);
  }
}

const john = new Person("John", 54, "Chennai");

john.selfIntro();
