console.log("Linked! - Activity 11")

// example

const users = [
    { username: 'ryan10', active: true },
    { username: 'morgan', active: false }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// INSTRUCTIONS:    Use filter to create an array of produce 
//                  that costs less than $5

// Create an array of groceries

const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4 },
    { name: 'lettuce', aisle: 'produce', price: 5 },
    { name: 'olive oil', aisle: 'baking', price: 10 },
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];
const produceLessThan5 = groceries.filter(grocery => grocery.aisle === "produce" && grocery.price < 5); // your code here

// Output the produce
console.log(groceries);
console.log(produceLessThan5);