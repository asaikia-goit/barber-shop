// "use strict";
// // This is a comment. Next comes all the code of the JS file


// // Old way
// var firstName = "lorem";

// // new way
// // 1. Using Const keyword:

// const pi = 3.1416;
// // pi = 3;
// console.log(pi);


// // 1. Using Let keyword:
// let userName = 'lorem';
// userName = 'ipsum';
// console.log('The name of the user is: ', userName, 12, firstName);

// let lastName;
// console.log(lastName);
// lastName = "doler";
// console.log(lastName);

// const myObj = {
//     firstName: 'Arunabh ',
//     lastName: ' Saikia',
//     getName: () => firstName + lastName,
// };

// console.log(myObj.getName());


// // Ask the client to confirm hotel reservation
// // and save the confirm result to a variable
// // const isComing = confirm("Please confirm hotel reservation");
// // console.log(isComing);

// // const value = prompt("Please enter a number!");
// // console.log(typeof value); // "string"
// // console.log(value === '5'); // "5"

// let value = 5;

// // Similar to value = value + 10;
// value += 10;


// console.log(5 == '5');
// console.log(5 === '5');

// // Strings
// const myString = 'JavaScript';
// console.log(myString);

// // 0  1  2  3  4  5  6  7  8  9
// // J  A  V  A  S  C  R  I  P  T

// const char = myString[1];
// console.log(char);

// // 0 <= index < string.length

// const message = "Mango" + " " + "is" + " happy";
// console.log(message); // Mango is happy


// const numberSummation = 1 + 2 + 3;
// console.log(numberSummation);
// console.log(typeof numberSummation);

// const stringConcatenation = "1" + "2" + "3";
// console.log(stringConcatenation);
// console.log(typeof stringConcatenation);

// // Using variables, you need to make a string with substituted values
// const guestName = "Eren";
// const roomNumber = 217;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const templateGreeting = `Welcome ${ guestName }, your room number is ${ roomNumber }!`;
// console.log(templateGreeting);
// console.log(templateGreeting.length);

// const messageX = "Welcome to Bahamas!";
// console.log(messageX.toLowerCase()); // "welcome to bahamas!"
// console.log(messageX.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(messageX); // "Welcome to Bahamas!"

// console.log("123" === 123); // false
// console.log("saMsUng".toLowerCase() === "SAMSUNG".toLowerCase()); // true


// const message_10 = "a Welcome to Bahamas!";
// console.log(message_10.indexOf("to")); // 8
// console.log(message_10.indexOf("a")); // 0
// console.log(message_10.indexOf("hello")); // -1

// const newMessage = message_10.replace('a', 'Hey! ');
// console.log(newMessage);

// const newMessage01 = message_10.replaceAll('a', 'X');
// console.log(newMessage01);

//Logical Operators
const A = true;
const B = false;

// AND: A and B => A && B
const hasPrerequisiteOne = false;
const hasPrerequisiteTwo = true;

console.log("Can I sign up for CS 405? : ", hasPrerequisiteOne && hasPrerequisiteTwo)

// OR: A or B => A || B
console.log("Can I sign up for CS 401? : ", hasPrerequisiteOne || hasPrerequisiteTwo)


// NOT: A not B => A ! B
console.log(10 !== '10');

console.log(!3); // !3 -> !true -> false

console.log(! ""); // !"Mango" -> !false -> true