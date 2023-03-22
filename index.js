// Write your solution in this file!
// Declare a global variable called customerName using the var keyword
var customerName = 'bob';

// Define a function that accesses that global customerName variable, and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Define a function that changes the value of the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'new best customer';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'John';

// Define a function that attempts to change the value of the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  let leastFavoriteCustomer = 'Jane'; // Declare a new variable with the same name using let
}

