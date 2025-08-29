let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
let maxAttempts = 10;

do { 
    let input = prompt("Enter your guess number (1-100): ");

    if (input === null) {
        console.log("Game ended by user.");
        break;
    }

    guess = Number(input); 

    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
        continue;
    }

    if (guess < 1 || guess > 100) {
        console.log("Please enter a number between 1 and 100.");
        continue;
    }

    attempts++;

    if (guess < secretNumber) {
        console.log("It's too low.");
    } 
    else if (guess > secretNumber) {
        console.log("It's too high.");
    } 
    else {
        console.log(" WOW! You guessed the correct number in " + attempts + " tries!");
        break; 
    }

    if (attempts === maxAttempts) {
        console.log("Game Over! You used all " + maxAttempts + " attempts.");
        console.log("The secret number was: " + secretNumber);
        break;
    }

    if (attempts === 5) {
        let lower = secretNumber - 10;
        let upper = secretNumber + 10;
        
        if (lower < 1) lower = 1;
        if (upper > 100) upper = 100;

        console.log(" Hint: The number is between " + lower + " and " + upper);
    }

} while (guess !== secretNumber);
