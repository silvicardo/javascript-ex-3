// javascript-ex-3 - main.js

//A random list of surnames
var surnames = ['Turing', 'Babbage', 'Forghieri', 'Papagni'];
console.log('This is our best programmers leaderbord : ' + surnames);

//prompt user for its surname
var userSurname = prompt('Please enter your surname if you feel good at programming');

//"push it to the end of the array"
surnames.push(userSurname);
console.log('Looks like you can\'t compete, you\'re last! -> ' + surnames);

//order the array alphabetically
surnames.sort();
console.log('let\'s give it a spin to see if you can get on top\nHere\s the new leaderbord:' + surnames);

//a variable to store the surname position in the array
var newUserPosition;

//we know your surname must be there so we check
//until we find it
//we use an index to track our progress
var index = 0;

while (surnames[index] != userSurname) {
  index++;
}

//This way index+1 value will correspond to
//the surname position at the point we exit the loop
newUserPosition = index + 1;

console.log('You\'re nr.' + newUserPosition);
