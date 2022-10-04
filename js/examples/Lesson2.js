// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-02/en.md

// Example 1 - User Input and Branching
// Using the if..else and prompt constructs,
//     write code that will ask: "What is the official name of JavaScript?".
//     If the user enters ECMAScript, then show an alert with the string "Correct!",
//     otherwise - "Do not know? ECMAScript!"

// const userInput = prompt("What is the official name of JavaScript?");
// if (userInput === "ECMAScript") {
//     alert('Correct!')
// }else{
//     alert("Do not know? ECMAScript!");
// }

// userInput === "ECMAScript" ? console.log("Correct!") : console.log("Do not know? ECMAScript!")

//********************************************************************************** */

// Write a script to display hours and minutes in the browser console as
//     a string format "14 hours 26 minutes.".If the value of the minutes variable is 0,
//     then output the string "14 o'clock", without minutes.

// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes > 0) {
//   timeString = `${hours} hours ${minutes} minutes`;
// } else {
//   timeString = `${hours} o' clock`;
// }
// console.log(timeString);

//********************************************************************************** */

//Example 3 - Branching
// const userInput = parseInt(prompt('Enter the number'));
// if (userInput > 0) {
//     alert("positive")
// } else if (userInput === 0) {
//     alert("zero")
// } else {
//     alert('negative')
// }

//********************************************************************************** */

// Example 4 - Nested branches
// const a = 120;
// const b = 180;
// if (a > 100 && b > 100) {
//     console.log(Math.max(a,b))
// } else {
//     console.log(b + 512)
// }

//********************************************************************************** */

// Example 5 - Link Formatting (endsWith)
let link = 'https://my-site.com/about';
// Write code below this line

if (!link.endsWith('/')) {
    link = link.concat('/')
}

// Write code above this line
console.log(link);

//********************************************************************************** */
