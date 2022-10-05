
let surname = prompt("Inserisci il tuo cognome:");
let name = prompt("Inserisci il tuo nome:");
let colore = prompt("Qual'è il tuo colore preferito?");
const twentyOne = "21"; 

let password = surname + name + colore 

document.getElementById("passkey").innerHTML = "La tua Password è: " + password + twentyOne; 
