'use strict';

// Riferimenti agli elementi HTML
const confirmBtn = document.getElementById('confirm-btn');
const playerScoreElement = document.getElementById('player-score');
const cpuScoreElement = document.getElementById('cpu-score');
const playerInputElement = document.getElementById('player-input');
const roundLabelElement = document.getElementById('round-label');
const playerScoreLabel = document.getElementById('player-score-label');
const cpuScoreLabel = document.getElementById('cpu-score-label');

// Tengo traccia delle vincite di ciascun giocatore e del round
let playerScore = 0;
let cpuScore = 0;
let round = 0;

// Mostro le informazioni a schermo
roundLabelElement.innerHTML = round;
playerScoreLabel.innerHTML = playerScore;
cpuScoreLabel.innerHTML = cpuScore;

// Il messaggio che mostrerò all'utente
let result = "";

confirmBtn.addEventListener('click',
    function () {
        // Creo una variabile per generare un valore random per il computer
        const cpuChoice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        // Assegmo il valore scelto dal giocatore
        const playerChoice = playerInputElement.value

        // Mostro i valori a schermo
        playerScoreElement.innerHTML = playerChoice
        cpuScoreElement.innerHTML = cpuChoice

        if (playerChoice > cpuChoice) {
            // Se vince il giocatore mostro il messaggio di vittoria...
            result = "You Win!";
            // ...aumento il suo punteggio
            playerScore += 1;
            // ...aumento il round
            round += 1;
        } else if (cpuChoice > playerChoice) {
            // Se vince il computer mostro il messaggio di sconfitta...
            result = "You loose!";
            // ...aumento il suo punteggio
            cpuScore += 1;
            // ...aumento il round
            round += 1;
        } else {
            // Se i numeri sono uguali mostro il messaggio...
            result = "Same result!";
            // ...aumento il round
            round += 1;
        }

        // Aggiorno i dati
        roundLabelElement.innerHTML = round;
        playerScoreLabel.innerHTML = playerScore;
        cpuScoreLabel.innerHTML = cpuScore;

        // Stampo in console il riepilogo
        console.log(`Your value is ${playerChoice} and CPU value is ${cpuChoice}. ${result}. Your score is ${playerScore}. CPU score is ${cpuScore}. Round number ${round}`);
    }
)



