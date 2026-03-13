// script.js

// Current Date and Time
const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log('Current Date and Time (UTC):', currentDate);

// Example Functionality
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to the coaching center.`;
}

// Example usage
console.log(greetUser('User'));