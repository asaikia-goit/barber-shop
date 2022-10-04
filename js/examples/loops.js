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


// let num = 10;
// let array = [1, 2, 3]
// console.log("FIRST: ", num, array)

// function test(number, list) {
//     number = number + 10;
//     list[1] = 100;

//     console.log("SECOND: ", number, list)
// }

// const arrayCopy = [...array]
// test(num, arrayCopy)

// console.log("THIRD: ", num, array)



// ARRAY SLICE

// const numberList = [1, 2, 3, 4, 5, 6];
// const slicedList = numberList.slice(0, 5);

// console.log(slicedList)
// console.log(numberList)



// const scores = [1, 2, 3, 4, 5];

// // O(N) Time
// console.log(scores.indexOf(3));

// // O(N) Time
// scores.forEach((score, idx) => {
//     if (score === 3) {
//         console.log(idx);
//      }
// })

// // O(N) Time
// for (let i = 0; i < scores.length - 1; i += 1){
//     if (scores[i] === 3) {
//         console.log(i)
//     }
// }



// // TWO SUM
// numbers = [1, -2, 4, 6, 12, 10]
// target = 10

// // 1, 4
// // 3, 4

// const array1 = [1, 2, 3]
// const array2 = [1, 2, 3]

// console.log(array1[1] === array2[1])

// const num1 = 1
// const num2 = 1


// function multiply(x = 10, y = 10, z = 10) {
//   console.log("The code before return is executed as usual");

//     if (x !== undefined) {
//       return x * y * z;
//     }

//   console.log(
//     "This log will never be executed, as it is positioned after return"
//   );
// }


// let result = multiply(5);
// console.log(result);

// const withdraw = (amount, balance) => {

//     if (amount === 0) {
//       return console.log("For the transaction, enter an amount greater than zero");
//     }
    
//     if (amount > balance) {
//         return console.log("Insufficient account balance");
//     }

//     console.log("The withdrawal has been successful");
// }

// withdraw(0, 300); // "For the transaction, enter an amount greater than zero"
// withdraw(500, 300); // "Insufficient account balance"
// withdraw(100, 300); // "The withdrawal has been successful"



function multiply() {

    console.log(arguments.length)

  for (const __ of arguments) {
    console.log(__)
  }

}

multiply(1, 2, 3, 4, 5)

// const foo = () => {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i++) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Error! Variable a is not available in the global scope
// // console.log(a);

// for (let i = 0; i < 1; i++) {
//   // ❌ Error! Variable a is not available in this scope
//   foo();
// }


// gets from API call
const users = ['lorem', 'ipsum', 'doler', 'set', 'amet'];

// Print: idx -> Name

// 5 x 5 => 5^2 => O(N^2) Time
for (const __ of users) {
  idx = users.indexOf(__);
  console.log(`userId: ${idx} | userName: ${__}`);
}

// 5 seconds => O(N) Time
for (let idx = 0; idx < users.length; idx++) {
  const user = users[idx];
  console.log(`userId: ${idx} | userName: ${user}`);
}

// 0 1 1 2 3 5 8 13 ....... 

// function fib (n) {
const fib = (n) => {
  if (n === 0) {
      return 1
    }

  return n * fib(n - 1)
  // 3 * 2 * 1 * 1
}




const val = fib(4)
console.log(val)



console.log(x)
const x = 100;


y();

function y() {
  console.log("y")
}