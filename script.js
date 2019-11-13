alert("Salve utente!")
var nome = prompt("Inserisci il tuo nome:");
var cognome = prompt("Inserisci il tuo cognome:");
var colore = prompt("Inserisci il tuo colore preferito:");
var pw = nome + cognome + colore + "19";
document.getElementById("password").innerHTML = pw;
/*
How does this thing works? It looks for the element with Id "password" in the document, then it changes its value to pw.
*/
