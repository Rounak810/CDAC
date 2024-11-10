// 2. Question: Write a function to calculate the area of a rectangle using both a regular
// function and an arrow function

function rect (l ,b){
    return l * b;
}

console.log(rect(4,5));

const rectA = (l,b) => (l*b);
console.log(rectA(4,6));

// 3: Create an object to represent a book with properties such as title, author, and
// year published. Add a method to display the book details

let book ={
    title: "The book of JS",
    author: "Rocky bhai",
    year: 2024,

    bookDetails: function(){
        console.log (`${this.title}, ${this.author}, ${this.year}`)
    }
}

book.bookDetails();

// 4: Given an object representing a car, use object destructuring to extract its properties.

const car ={
    name: "exter",
    model: "v1",
    Engine: "good"
}

const {name,Engine}=car;
console.log("Name: ",name , "\nCondition:",Engine);

// 5:Given an array of numbers, use array destructuring to extract the first two numbers.

const arr=[10,20,40,50];

const [f,s]=arr;

console.log(f,s)

// 6Question: Use the map method to create a new array that contains the lengths of the names in the following array.
const cars =[ "volvo", "maruti","tesla","mini"];

const carLength = cars.map( value=>`${value} ,${value.length}`);
console.log(carLength);

// 7. Question: Use the filter method to create a new array containing only the even numbers from the given array.

const noArr=[ 11,12,67,34,56,79,80];

const eveArr= noArr.filter( function(value){
    if(value%2==0) return value;
})

console.log(eveArr);

// using Arrow Funciton
const eveArrow= noArr.filter( value =>{
    if(value%2==0) return value;
})

console.log(eveArr);

// 8. Question: Use the reduce method to find the total price of items in a shopping cart.
let price = [220,342,100,1000];
let total = price.reduce( (v1,v2)=> {
    return v1+v2
});

console.log("total price: ",total)

// 9. Question: Create a function that takes any number of arguments and returns their sum
// using the rest operator.

function sum(...args){
    let total=0;
    for(let value of args){
        total=value+total
    }

    return total;
}

console.log(sum(1,2,3,4,5));

// 10. Question: Use the spread operator to merge two arrays of fruits.

const names=["volvo","test","mini"];
const names1=["tata","maruti"];

console.log(...names,...names1);
// 11. Question: Write a function that accepts a callback and executes it after a delay.
setTimeout(function(){
    console.log("Hello Callback function")
},3000);

// 12. Question: Create a promise that resolves with a message after 3 seconds.

const meraPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("I am inside message function");
    }, 3000);
});

// To use the promise and see the message
meraPromise.then(function(message) {
    console.log(message);
});
// 13. Question: Create a function that returns another function, demonstrating closure.
function createCounter() {
    let count = 0; // This variable is enclosed in the closure

    return function() {
        count++; // Increment the count
        return count; // Return the current count
    };
}

// Usage
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// 14. Question: Use async/await to fetch data from a public API and log it to the console.

async function data() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const apiPrint = await response.json();
        console.log(apiPrint); // Use console.log instead of console()
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

data();

// 15. Question: Create a function that takes an array of numbers, applies a filter to keep only
// even numbers, then uses map to double those numbers, and finally returns the total using reduce

const arrNum=[11,22,33,44,56,79,46,39];

const arrEve = arrNum.filter(function(value) {
    if(value % 2 == 0) return value;
});

console.log("Here are Even Arrays: ", arrEve);

const douArr =  arrEve.map( value1 =>  value1 = value1 * 2 );
console.log( "Doubled Array: ",douArr);

const sum1 = douArr.reduce( (val1,val2)=>{
    return val1+val2;
})

console.log("Sum :",sum1);

// section -2



const budgetTracker = (() => {
    let expenses = [];
    let totalExpense = 0;

    // Function to simulate fetching initial expenses
    const fetchInitialExpenses = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { description: "Groceries", amount: 50, date: "2024-01-01" },
                    { description: "Utilities", amount: 100, date: "2024-01-05" },
                ]);
            }, 1000);
        });
    };

    // Function to add expenses
    const addExpense = (description, amount, callback) => {
        if (amount < 0) {
            console.log("Amount must be a positive value.");
            return;
        }
        const expense = { description, amount, date: new Date() };
        expenses = [...expenses, expense]; // Using spread operator
        totalExpense += amount;

        if (callback) callback(`Successfully added expense: ${description} - $${amount}`);
    };

    // Function to display all expenses
    const displayExpenses = () => {
        if (expenses.length === 0) {
            console.log("No expenses to display.");
            return;
        }
        console.log("Expenses:");
        expenses.forEach(({ description, amount, date }) => {
            console.log(`${description}: $${amount} (Date: ${date.toDateString()})`);
        });
    };

    // Arrow function to calculate total expenses using reduce
    const calculateTotal = () => expenses.reduce((total, { amount }) => total + amount, 0);

    // Function to display expenses over a certain amount
    const displayHighExpenses = (threshold) => {
        const highExpenses = expenses.filter(({ amount }) => amount > threshold);
        if (highExpenses.length === 0) {
            console.log(`No expenses over $${threshold} to display.`);
            return;
        }
        console.log(`Expenses over $${threshold}:`);
        highExpenses.forEach(({ description, amount }) => {
            console.log(`${description}: $${amount}`);
        });
    };

    // Function to display all expense descriptions
    const displayExpenseDescriptions = () => {
        const descriptions = expenses.map(({ description }) => description);
        console.log("Expense Descriptions:", descriptions.join(", "));
    };

    // Function to initialize the tracker and fetch initial expenses
    const init = async () => {
        const initialExpenses = await fetchInitialExpenses();
        initialExpenses.forEach(({ description, amount }) => addExpense(description, amount));
        displayExpenses();
        console.log(`Total Expenses: $${calculateTotal()}`);
    };

    return {
        addExpense,
        displayExpenses,
        displayHighExpenses,
        displayExpenseDescriptions,
        calculateTotal,
        init,
    };
})();

// Initialize the tracker and fetch initial expenses
budgetTracker.init();

// Example usage to add new expenses
budgetTracker.addExpense("Lunch", 15, (msg) => console.log(msg));
budgetTracker.addExpense("Taxi", 30, (msg) => console.log(msg));

// Display all expenses and calculate total
budgetTracker.displayExpenses();
console.log(`Total Expenses: $${budgetTracker.calculateTotal()}`);

// Display expenses over a certain amount
budgetTracker.displayHighExpenses(20);

// Display all expense descriptions
budgetTracker.displayExpenseDescriptions();
