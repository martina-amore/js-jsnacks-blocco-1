// JSnack 2
// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bici = [
  {
    "nome": "blu",
    "peso": 8
  },
  {
    "nome" : "rosso",
    "peso" : 7
  },
  {
    "nome" : "verde",
    "peso" : 9
  }
];

var biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

document.getElementById("esercizio").innerHTML = "La bici più leggera si chiama " + biciLeggera.nome + " e pesa " + biciLeggera.peso;
