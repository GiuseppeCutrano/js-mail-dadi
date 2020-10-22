// chiedere email
var mailUtente = prompt("Inserisci la tua E-Mail");
console.log(mailUtente);
//Scrivo un elenco mail
var emailList = ["ethanhunt.@impossible.it" ,"gokusan@email.it","barneystinson@email.it","capitanjack.sparrow@email.it","ninnanna@email.it"]
console.log(emailList)
//Controllo che la mail stia nell'elenco
var message = false;

for (var i = 0; i < emailList.length; i++){
  if (mailUtente == emailList[i]){
    mailPresente = true;
  }
}
if (mailPresente == true){
  alert("Benvenuto nel sito");
}else {
  alert("Accesso non autorizzato!")
}

console.log(mailPresente);
