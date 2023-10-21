document.addEventListener("DOMContentLoaded", function () {
    const player1Dice = document.getElementById("player1Dice");
    const player2Dice = document.getElementById("player2Dice");
    const resultMessage = document.querySelector(".result");
    const rollButton = document.getElementById("rollButton");

    rollButton.addEventListener("click", function () {
        rollDice(player1Dice);
        rollDice(player2Dice);

        const player1Score = parseInt(player1Dice.getAttribute("data-roll"));
        const player2Score = parseInt(player2Dice.getAttribute("data-roll"));

        if (player1Score > player2Score) {
            resultMessage.textContent = "Player 1 wins!";
        } else if (player1Score < player2Score) {
            resultMessage.textContent = "Player 2 wins!";
        } else {
            resultMessage.textContent = "It's a tie!";
        }
    });

    function rollDice(dice) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.setAttribute("data-roll", randomNumber);
        dice.src = `dice-${randomNumber}.png`;
    }
});
