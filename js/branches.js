// let cost = 0;
// const subscription = "free";

// if (subscription === "annual") {
//     cost = 100;
// } else if(subscription === 'monthly') {
//     cost = 10;
// } else if(subscription === 'weekly') {
//     cost = 7;
// } else {
//     console.log("Hey you have free sub!")
// }

// console.log(cost); // 100


// Ternary

let type;
const age = 1;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// age >= 18 ? type = "adult" : type = "child";

 age >= 18 ? type = "adult" : ( age < 3 ? type = 'baby' : type = 'child' );

console.log(type); // "adult"

// Switch case
let cost;
const subscription = "free";

// if (subscription === "free") {
//     cost = 0;
// } else if (subscription === "pro") {
//     cost = 100;
// } else if (subscription === "premium") {
//     cost = 500;
// } else if (subscription === "platinum") {
//     cost = 1500;
// } else {
//     console.log("Invalid subscription type");
// }

// console.log("if else: ", cost);


switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log("switch: ", cost); // 500