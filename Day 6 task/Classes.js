class Person {
    name;
    age;
    location;
  
    constructor(name,age,location) {
      this.name = name;
      this.age = age;
      this.location= location;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}. I am ${age} years old and from ${location}`);
    }
  }
const john = new Person("John",54,"Chennai");

john.introduceSelf(); 