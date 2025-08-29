function calculator(){
while(true){
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    continue;
}

    let operation = prompt("Enter operation (+, -, *, /,**,%): ");
    let result;
    if (operation === "+") {
        result = num1 + num2;
    } 
    else if (operation === "-") {
        result = num1 - num2;
    } 
    else if (operation === "*") {
        result = num1 * num2;
    } 
    else if (operation === "/") {
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            result = num1 / num2;
        }
    } 
    else if (operation === "%") {
            result = num1 % num2;
        } 
        else if (operation === "**") {
            result = num1 ** num2;
        }
    else {
        console.log("Error: Invalid operation! Use +, -, * or /.");
    }

    if (result !== undefined) {
        console.log("Result: " + result);
        break;
    }
}
}
calculator();