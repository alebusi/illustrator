var intestazione='<svg viewBox="-10 -10 120 120"> <path d=\"';
var coda="\" /></svg>";
var testo="";

function scriviTxt(car) {
  if (car == "x") {
    testo=testo.substring(0, testo.length - 1);
  }
  else if (car == '<') {
    testo=testo+intestazione;
  }
  else if (car == ">") {
    testo=testo+coda;
  }
  else {
    testo=testo+car;
  }
  document.getElementById("testo").innerHTML = testo;
  document.getElementById("anteprima").innerHTML = testo;  
}
