class Animal {
  // Constructor to initialize the name property
  constructor(public name: string) {
    this.name = this.capitalizeName(name)
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }

  private capitalizeName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

class Dog extends Animal {
  breed: string; // Additional property specific to Dog - Extending

  constructor(name: string, breed: string) {
    super(name); // Calling the superclass constructor
    this.breed = breed;
  }

  // Overriding the speak method to make the Dog bark - Extending
  speak(): void {
    console.log(`${this.name} the ${this.breed} barks`);
  }
}

const cat = new Animal('cat')
cat.speak(); // Output: Cat makes a sound
const dog = new Dog('buddy', 'Golden Retriever');
dog.speak(); // Output: Buddy the Golden Retriever barks