
        let userScore = 0, computerScore = 0;

        function getCompChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function computeWinner(userChoice, compChoice) {
            if (userChoice === compChoice) return "tie";
            if (
                (userChoice === 'rock' && compChoice === 'scissors') ||
                (userChoice === 'paper' && compChoice === 'rock') ||
                (userChoice === 'scissors' && compChoice === 'paper')
            ) {
                return "win";
            } else {
                return "lose";
            }
        }

        function playGame(userChoice) {
            let compChoice = getCompChoice();
            let result = computeWinner(userChoice, compChoice);

            if (result === "win") userScore++;
            if (result === "lose") computerScore++;

            document.getElementById("result").innerHTML = `You chose: ${userChoice} | Computer chose: ${compChoice} <br> ${result === "tie" ? "It's a tie!" : result === "win" ? "You win! 🎉" : "You lose! 😞"}`;
            document.getElementById("score").innerHTML = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
        }