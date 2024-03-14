// Node.js is  a  runtime  enviornment , not a framework or library , it helps to run js code without using 
// browser (introduction second class )

import PromptSync from "prompt-sync";
const prompt = PromptSync();
 // whenever you create a newfolder or working on javascript node module make sure to (npm init )

 // Define a variable
let temperature =prompt("Enter the temperature=>");

// Check the temperature
if (temperature >= 30) {
    console.log("It's a hot day!"); // Execute if the condition is true
} else if (temperature > 20 && temperature < 30) {
    console.log("It's a pleasant day!"); // Execute if the first condition is false and this condition is true
} else {
    console.log("It's a cold day!"); // Execute if all conditions above are false
}

