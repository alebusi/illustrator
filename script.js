var intestazione='<svg viewBox="-10 -10 120 120"> <path d=\"M0 0';
var coda="\" /></svg>";
var testo="";
var pos=0;
var cursore="_";

function scriviTxt(car) {
  testo=document.getElementById("testo").value;
  if (car == "x") {
    pos-=1;
    testo=testo.substring(0,pos) + testo.substring(pos+1);
  }
  else if (car == '<') {
    testo=intestazione+testo;
    pos+=intestazione.length;
  }
  else if (car == ">") {
    testo=testo+coda;
    pos+=coda.length;
  }
  else {
    //alert("pos "+pos);
    testo=testo.substring(0,pos)+ car + testo.substring(pos);
    pos+=1;
  }
  document.getElementById("testo").value = testo;
  testoAnteprima=intestazione+" "+testo.replace(intestazione,"").replace(coda,"")+coda;
  document.getElementById("anteprima").innerHTML=testoAnteprima;
  //mySelect(pos);  
}

function muoviCursore(direzione) {
  testo=document.getElementById("testo").value;
  testo=testo.replace(cursore, "");
  //alert("pos"+pos+"lt "+testo.length);
  if (pos+direzione >-1 && pos+direzione <= testo.length) {
    pos=pos+direzione;
    //alert("pos"+pos);
    testo=testo.substring(0,pos)+ cursore + testo.substring(pos);
    document.getElementById("testo").value = testo;
    //mySelect(pos);
  }
}

function mySelect(position) {
  a=1;
}

function cerchio() {
  testo=document.getElementById("testo").value;
  //posRaggio=testo.lastIndexOf("q");
  raggio=testo.substring(testo.lastIndexOf("q")+1);
  //alert("raggio "+raggio);
  testoCerchio=" 0 " +raggio+" "  +raggio+
               " t -"+raggio+" "  +raggio+
               " t -"+raggio+" -" +raggio+
               " t " +raggio+" -" +raggio+" z";
  testo=testo+testoCerchio;
  pos=testo.length;
  document.getElementById("testo").value = testo;
}
