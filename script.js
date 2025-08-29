// Part 1: Variable declarations and conditionals
let userInput = document.getElementById("userInput");
let outputDiv = document.getElementById("output");
let submitBtn = document.getElementById("submitBtn");

// Function to handle user input
function handleInput() {
    let inputValue = userInput.value;
    if (inputValue) {
        outputDiv.textContent = `You entered: ${inputValue}`;
        outputDiv.style.display = "block"; // Show output
    } else {
        outputDiv.textContent = "Please enter something.";
    }
}

// Event listener for the submit button
submitBtn.addEventListener("click", handleInput);

// Part 2: Custom functions
function calculateTotal(a, b) {
    return a + b;
}

function formatString(str) {
    return str.trim().toUpperCase();
}

// Part 3: Loop examples
let numbers = [1, 2, 3, 4, 5];

// Using for loop to calculate the sum of an array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// Using forEach to log each number
numbers.forEach(num => {
    console.log("Number:", num);
});

// Part 4: DOM interactions
let toggleBtn = document.getElementById("toggleBtn");

// Function to toggle the output visibility
function toggleOutput() {
    if (outputDiv.style.display === "block") {
        outputDiv.style.display = "none";
    } else {
        outputDiv.style.display = "block";
    }
}

// Event listener for the toggle button
toggleBtn.addEventListener("click", toggleOutput);
