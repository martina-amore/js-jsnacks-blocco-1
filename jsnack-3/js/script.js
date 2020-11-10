// JSnack 3
// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangolo =
  {
    "base": 9,
    "altezza": 14
  };

var area = (triangolo.base * triangolo.altezza) / 2;
var ipotenusa = Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2).toFixed(1);
var perimetro = (triangolo.base + triangolo.altezza + ipotenusa);

console.log(ipotenusa);
console.log(area);
console.log(perimetro);

document.getElementById("esercizio").innerHTML = "La base misura " + triangolo.base + " e l'altezza misura " + triangolo.altezza + ", l'ipotenusa misura " + ipotenusa + "<br>";
document.getElementById("esercizio").innerHTML += "L'area misura " + area + "<br>";
document.getElementById("esercizio").innerHTML += "Il perimetro misura " + perimetro;
