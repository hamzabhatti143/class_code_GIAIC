"use strict";
// Encapsulation
// Access modifiers
//public
//private
//protected
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    color;
    age;
    _price;
    constructor(name, color, age, price) {
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
    constructor(name, color, age, price) {
        super(name, color, age, price);
    }
    MakeNoice() {
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
let d = new Dog("Tiger", "white", 4, 200);
console.log(`${d.name} Price is ${d.price}`);
d.name = "Puppy";
d.price = 180;
console.log(`${d.name} Price is ${d.price}`);
// let c: Cat = new Cat("Mano", "white", 2, 100);
// c.MakeNoice();
