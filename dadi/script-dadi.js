
var utente = Math.floor(Math.random() * 6) + 1;
console.log(utente);

var cpu = Math.floor(Math.random() * 6) + 1;
console.log(cpu);


if (utente > cpu) {
  alert("Hai vinto")
} else if (utente < cpu) {
  alert("Ha vinto la cpu")
} else {
  alert("Pareggio!")
}
