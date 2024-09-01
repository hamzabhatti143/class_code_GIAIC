// Encapsulation
// Access modifiers
//public   yeah sab jagah access ho sakta hai
//private  yeah sirf apni class mein access ho sakta hai
//protected yeah child class mein bhi access ho sakta hai or glabally access nhi hota

class Animal {
  name: string;
  color: string;
  age: number;
  private _price: number;

  constructor(name: string, color: string, age: number, price: number) {
    this.name = name;
    this.color = color;
    this.age = age;
    this._price = price;
  }

  //get ka method hum private value ko publically access karne kay liye use karte hain
  get price() {
    return this._price;
  }

  set price(val) {
    this._price = val;
  }
  MakeNoice() {
    console.log("Animal can make noice");
  }
}

class Dog extends Animal {
  constructor(name: string, color: string, age: number, price: number) {
    super(name, color, age, price);
  }

  MakeNoice(): void {
    console.log(`${this.name} is barking`);
  }
}

// class Cat extends Animal {
//   constructor(name: string, color: string, age: number, price: number) {
//     super(name, color, age, price);
//   }

//   MakeNoice(): void {
//     console.log(`${this.name} is meowing`);
//   }
// }

// let a = new Animal("Dog", "white", 4, 200);
// a.MakeNoice();

let d: Dog = new Dog("Tiger", "white", 4, 200);
console.log(`${d.name} Price is ${d.price}`);
d.name = "Puppy";
d.price = 180;
console.log(`${d.name} Price is ${d.price}`);

// let c: Cat = new Cat("Mano", "white", 2, 100);
// c.MakeNoice();
