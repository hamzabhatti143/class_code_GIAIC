// Method Overload
// Method Override

// Method Overload

// class LCD {
//     Display(input: "HDMI"): void
//     Display(input: "USB"): void
//     Display(input: "Cable"): void

//     Display(input: any){
//         if(input === "HDMI"){
//             console.log ("Pleaying Game")
//         }
//         else if(input === "USB"){
//             console.log("Display USB Data")
//         }
//         else if(input === "Cable"){
//             console.log("Display Channels")
//         }
//     }
// }

// let l = new LCD()

// l.Display("Cable");

// Method Override

// class Electronics{
//     TurnOn(){
//         console.log("Device turn on")
//     }
// }

// class Microwave extends Electronics{
//     TurnOn(){
//         console.log("Microwave turn on")
//     }
// }

// let a = new Electronics()
// a.TurnOn()

// let b = new Microwave()
// b.TurnOn()

class Animal {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  MakeNoice() {
    console.log("Animal can make noice")
  }
}

class Dog extends Animal{
    constructor(name:string, color: string, age: number){
        super(name, color, age)
    }

    MakeNoice(): void {
        console.log(`${this.name} is barking`)
    }
}

class Cat extends Animal{
    constructor(name:string, color: string, age: number){
        super(name, color, age)
    }

    MakeNoice(): void {
        console.log(`${this.name} is meowing`)
    }
}

let a = new Animal("Dog", "white", 4)
a.MakeNoice()

let d:Dog = new Dog("Tiger", "white", 4)
d.MakeNoice()

let c:Cat = new Cat("Mano", "white", 2)
c.MakeNoice()


