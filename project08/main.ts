// function sum(a: number, b: number) {
//   let final = a + b;
//   return final;
// }

// let a = sum(20, 10);
// if (a != null) {
//   console.log(a);
// }

// let newAge = Math.random() > 0.6 ?"Khan" :60

// if(typeof newAge == "number"){
//   newAge.toFixed();
// }
// else{
//   newAge.toUpperCase
// }

// type Person = {
//   name: string;
// }
//  interface IPerson{
//   name : string
//  }

// let person: IPerson = {
//   name: "malinga"
// }


interface Deal1{
  food: string
}

interface Deal2{
  food: string, 
  Drink: string
}


let hamzaOrder: Deal1 ={
  food: "Biryani"
}

let hadiOrder: Deal2 ={
  food: "Burger",
  Drink: "ishting"
}


let hamzaTable: Deal1 = hadiOrder // stale property kay andar extra property add kardo toh error nhi ata

let hamzafreshTable: Deal1={
  food: "Biryani"// jo hath hath create hoga us mein hum ziyada properties nhi de sakte
}

