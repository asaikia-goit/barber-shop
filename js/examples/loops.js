let counter = 0;

// while (counter < 10) {
//     counter += 1;
//     console.log("counter 1 : ", counter);
// }

// counter = 0;
// while (counter < 10) {
//     console.log("counter 2 : ", counter);
//     counter += 1;
// }


// counter = 10;
// do {
//     console.log("counter 3 : ", counter);
//     counter += 1
// } while (counter < 10);


// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 20) {
//     console.log("using while loop: ", i)
//     i += 5
// }


// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Number 3 found, abort the loop");
//     break;
//   }
// }

// console.log("Log after loop");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Odd i: ", i); // 1, 3, 5, 7, 9
// }



// ARRAYS
// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients)

// const word1 = clients[0];
// console.log(word1[0]);
// console.log(clients[1]);

// clients[1] = 12313321
// console.log(clients[1]);
// console.log(clients[2]);

// console.log(clients)

// console.log(clients[clients.length - 1]);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const value of clients) {
//     console.log(value);
// }

// const string = "javascript";

// for (const character of string) {
//     console.log(character);
// }

// clients.forEach((value, idx) => {
//     console.log(idx, value)
// } )


let num = 10;
let array = [1, 2, 3]
console.log("FIRST: ", num, array)

function test(number, list) {
    number = number + 10;
    list[1] = 100;

    console.log("SECOND: ", number, list)
}


test(num, array)

console.log("THIRD: ", num, array)



