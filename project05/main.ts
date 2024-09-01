// type User = {
//     name: string , 
//     age: number , 
//     role: string,
//     children: {
//         name: string ,
//         age : number ,        
//     }
// }

// let user1 : User = {
//     name: "Arshad" , 
//     age: 50 , 
//     role: "Father",
//     children: {
//         name: "Hamza",
//         age: 20
//     }
// }

// console.log(user1.children.name);
// let trafficlights: "red" | "yellow" | "green" = "red"

type Student = {
    name : string , 
    rollNumber: number
}

type Teacher = {
    name: string ,
    exp: number
}

let std1 : Student = {
    name : "Aiman",
    rollNumber : 1234
}

let tecaher1 : Teacher = {
    name: "Hamza" ,
    exp: 2
}

let both : Student & Teacher = {
    name: "Areeb" , 
    exp: 4, 
    rollNumber: 2134
}