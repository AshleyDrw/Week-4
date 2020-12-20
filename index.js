///uses template literals instead of concatenation to return first name and last name
function fullName(firstName, lastName) {
    return console.log(`${firstName} ${lastName}`);
};
fullName('Ashley, Drew');

//same function as above but written as an arrow function
const name = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
name('Ashley, Drew');

//a function that alerts 'Time is up!'
setTimeout(() => {
   alert('Time is up!');
},3000);

//an arrow function that alerts 'Are we there yet?'
const askAreWeThereYet = () => alert('Are we there yet?');
setInterval(askAreWeThereYet, 4000);

//a function that splices an array

const strings = ['Hola', ' como estas', 'bien', 'y tu', 'asi asi', 'gracias', 'hasta luego'];

const processSplicedValue = (arr, index, func) => {
let value = arr.splice(index, 1);
func(value);
}

//calling the function on the array 
processSplicedValue(strings, 2, console.log); 
processSplicedValue(strings, 0, alert);
processSplicedValue(strings, 0, (value) => alert(value));

//created a custom function to pass into the processSplicedValue function
const processLengthOfArray = (value) => console.log(value.length);

processSplicedValue(strings, 3, processLengthOfArray);
