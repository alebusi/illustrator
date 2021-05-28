var intestazione='<svg viewBox="-10 -10 120 120"> <path d=\"';
var coda="\" /></svg>";
var testo="";
var pos=0;
var cursore="]";

function scriviTxt(car) {
  testo=document.getElementById("testo").value;
  if (car == "x") {
    pos-=1;
    testo=testo.substring(0,pos) + testo.substring(pos+1);
  }
  else if (car == '<') {
    testo=testo+intestazione;
  }
  else if (car == ">") {
    testo=testo+coda;
  }
  else {
    testo=testo.substring(0,pos)+ car + testo.substring(pos+1);
    pos+=1;
  }
  document.getElementById("testo").value = testo;
  document.getElementById("anteprima").innerHTML = testo;  
}
function muoviCursore(direzione) {
  testo=document.getElementById("testo").value;
  testo=testo.replace("]", "");
  //alert("pos"+pos);
  //if (pos > 0 && pos < testo.length-1) {
    pos=pos+direzione;
    //alert("pos"+pos);
    testo=testo.substring(0,pos)+ "]" + testo.substring(pos);
    document.getElementById("testo").value = testo;
  //}
}
