let ArrayColor = ["Nero","Grigio","Rosso","Blue","Arancione","Bianco","Marrone","Rosa","Giallo","Verde","Viola","Marrone","Navyblue","Oro","Tomato","Lime","Salmone","Oliva","Aqua","Violetto","Chocolate","Argento","Bronzo","Darkblue"];

let surname = prompt("Inserisci il tuo cognome:");

let Name = prompt("Inserisci il tuo nome:");

let col = prompt("Qual'è il tuo colore preferito? Scegli tra quelli della lista: \n  - Nero  \n - Grigio \n - Rosso \n - Blue \n - Arancione \n - Bianco \n - Marrone \n - Rosa \n - Giallo \n - Verde \n - Viola \n - Marrone \n - Navyblue \n - Oro \n - Tomato \n - Lime \n - Salmone \n - Oliva \n - Aqua  \n - Violetto \n - Chocolate  \n - Argento \n - Bronzo \n - Darkblue");

let truecol = false;  

for(i=0; i <= ArrayColor.length ; i++){

    if( ArrayColor[i] == col){
        truecol = true; 
    }

}

if(truecol != true){
    alert("Non è stato inserito un colore della lista")
}

const twentyOne = "21";

let password = surname + Name + col;  

document.getElementById("surname").innerHTML = "Il Cognome Inserito è: " + surname; 

document.getElementById("name").innerHTML = "Il Nome Inserito è: " + Name;

document.getElementById("Col").innerHTML = "Il colore Inserito è: "  + col; 

document.getElementById("cost").innerHTML = "La costante finale è: " + twentyOne;  

document.getElementById("passkey").innerHTML = "La tua Password è: " + password + twentyOne; 

