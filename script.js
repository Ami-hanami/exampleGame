function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return "камень";
    } else if (randomNum == 1) {
        return "ножницы";
    } else {
        return "бумага";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Ничья!"; 
    } 
        if (
        (playerSelection === "камень" && computerSelection === "ножницы") ||
        (playerSelection === "ножницы" && computerSelection === "бумага") ||
        (playerSelection === "бумага" && computerSelection === "камень")
    ) {
        return `Вы выиграли! ${playerSelection} побеждает ${computerSelection}`;
    } 
    return `Вы проиграли! ${computerSelection} побеждает ${playerSelection}`;
}

function game () {
    const validChoices = ["камень", "ножницы", "бумага"];
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Выберите: камень, ножницы, бумага").toLowerCase();

        if (!validChoices.includes(playerSelection)) {
            alert("Некорректный ввод! Попробуйте снова.");
            i--;
            continue;
        }
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);
        console.log(result);

        if (result.includes("Вы выиграли!")) {
            playerScore++;
        } else if (result.includes("Вы проиграли!")) {
          computerScore++;
        }
    }
    console.log("Игра завершена!");
    console.log(`Очки игрока: ${playerScore}`);
    console.log(`Очки компьютера: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Вы выиграли игру!");
    } else if (computerScore > playerScore) {
        console.log("Вы проиграли игру!");
    } else {
        console.log("Вы сыграли в ничью!");
    }
}

game ();