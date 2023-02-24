'use strict';

// Riferimenti HTML
const emailField = document.getElementById('email');
const searchBtn = document.getElementById('search-btn');
const messageElement = document.getElementById('message');
const newsletterBox = document.getElementById('newsletter-box')
const subscribersList = document.getElementById('our-subscribers')

// Creo due array per genererare in modo random indirizi email fittizzi
const providers = ['@icloud.com', '@outlook.com', '@gmail.com', '@yahoo.com', '@libero.it', '@hotmail.it', '@tim.it'];
const names = ['Gaspare', 'Simona', 'Gaetano', 'Daniela', 'Gabriele', 'Veronica', 'Tommaso', 'Chiara', 'Francesco', 'Carla', 'Giovanni', 'Adele', 'Luca', 'Anna', 'Vincenzo', 'Serena'];

// Array che conterray le email generate in modo casuale
const newsletterSubscribers = [];

// Creo 10 email in modo random
for (let i = 0; i < 10; i++) {
    // Ad ogni giro prendo un elemento random da providers e names
    const randomProvider = providers[Math.floor(Math.random() * providers.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];

    // Lo aggiungo all'array delle email
    newsletterSubscribers.push(randomName + randomProvider);
}

// Controllo che newsletterSubscribers si sia rimepito
console.log(newsletterSubscribers);

// Mostro tutti gli elementi dell'array newsletterSubscribers su una lista
for (let i = 0; i < newsletterSubscribers.length; i++) {
    // Creo un li per ogni membro della lista
    const listItem = document.createElement('li')
    listItem.innerHTML = newsletterSubscribers[i]
    subscribersList.appendChild(listItem)
}

// Messaggio da restiture all'utente
// Creo l'elemento che mostra il messaggio
const message = document.createElement('p')
// lo aggiungo al div
newsletterBox.appendChild(message)

// Al click del cerca
searchBtn.addEventListener('click',
    function () {
        // Mi salvo il valore del campo email
        const emailFieldValue = emailField.value;

        // Controllo elemento per elemento l'array
        for (let i = 0; i < newsletterSubscribers.length; i++) {

            // Ad ogni iterazione del ciclo controllo se l'email inserita è uguale a quella presente nella attuale iterazione
            if (newsletterSubscribers[i] === emailFieldValue) {
                // Confermo che all'utente l'email è presente
                message.innerHTML = "You are already a subscriber!";
                message.style.color = 'red'
                break;
            } else if (i === newsletterSubscribers.length - 1) { // Se siamo all'ultima iterazione del ciclo e l'email non è stata trovata, la aggiungiamo all'array

                message.innerHTML = "Thank for subscribe to our newsletter!";
                newsletterSubscribers.push(emailFieldValue);
                message.style.color = 'green'

                // Aggiungo l'elemento appena creato alla lista degli iscritti
                const listItem = document.createElement('li')
                listItem.innerHTML = emailFieldValue
                subscribersList.appendChild(listItem)

                break; //  Questo l'ho messo perché newsletterSubscribers.push(emailFieldValue); fa aumentare di 1 l'array e il ciclo fa un altra iterazione
            }
        }
    }
)