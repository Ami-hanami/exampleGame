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
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Ничья!";
    } else if (
        (playerSelection === "камень" && computerSelection === "ножницы") ||
        (playerSelection === "ножницы" && computerSelection === "бумага") ||
        (playerSelection === "бумага" && computerSelection === "камень")
    ) {
        return `Вы выиграли! ${playerSelection} побеждает ${computerSelection}`;
    } else if (
        (playerSelection === "камень" && computerSelection === "бумага") ||
        (playerSelection === "ножницы" && computerSelection === "камень") ||
        (playerSelection === "бумага" && computerSelection === "ножницы")
    ) {
    return `Вы проиграли! ${computerSelection} побеждает ${playerSelection}`;
    } else {
    return "Некорректный ввод!";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Выберите: камень, ножницы, бумага");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game ();