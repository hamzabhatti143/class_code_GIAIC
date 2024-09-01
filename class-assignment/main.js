"use strict";
// function checkEvenOdd(a: number) {
//   if (a % 2 == 0) {
//     console.log("Number is Even");
//   } else {
//     console.log("Number is Odd");
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// checkEvenOdd(18);
// checkEvenOdd(9);
// function arrayOperations():void{
//     let num: number[] = [1,2,3,4,5,6,7,8]
//     console.log(num);
//     num.push(9)
//     num.shift()
//     console.log(num)
// }
// arrayOperations()
// function multiples(){
//     let arr: number [] = [1,2,3,4,5,6]
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * 2
//         console.log(arr);        
//     }
// }
// multiples();
// function multiply(num1: number []){
//     const Newarr: number[] = num1;
//     for (let i=0; i < num1.length; i++){
//         Newarr[i] = Newarr[i] * 2;
//         console.log(Newarr);
//     }
// }
// multiply([1,2,3,4,5])
function largestNumber(arr) {
    console.log(arr);
    let num = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}
let myArray = [1, 2, 3, 4, 5];
let largestElement = largestNumber(myArray);
console.log(largestElement);
