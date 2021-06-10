var intestazione='<svg viewBox="-10 -10 120 120">';
var coda="\" /></svg>";
var griglia='<path id="griglia" d=\"M0 0 h100 m0 0 v100 m0 0 h-100 m0 0 v-100 m25 0 v100 M50 0 v100 M75 0 v100 M0 25 h100 M0 50 h100 M0 75 h100"/>';
var nPath='<path d=\"M 0 0';
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
    testo=testo+'"/> '+nPath;
    pos=testo.length;
  }
  else if (car == ">") {
    testo=intestazione+" "+nPath+" "+testo.replace(/_/g,"")+coda;
    testo=testo.replace(/\s+/g," ");
    testo=testo.replace(/_/g,"");
    pos=testo.length;
  }
  else if (car == "O") {
    cerchio();
    pos=testo.length;
  }
  else {
    //alert("pos "+pos);
    testo=testo.substring(0,pos)+ car + testo.substring(pos);
    pos+=1;
  }
  document.getElementById("testo").value = testo;
  testoAnteprima=intestazione+" "+griglia+" "+nPath+" "+
      testo.replace(intestazione,"").replace(coda,"")+coda;
  //alert(testoAnteprima);
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
  raggio=testo.substring(testo.lastIndexOf("q")+1);
  raggio=raggio.replace(" ","");
  testoCerchio=" 0 " +raggio+" "  +raggio+
               " t-"+raggio+" "  +raggio+
               " t-"+raggio+" -" +raggio+
               " t" +raggio+" -" +raggio+" z ";
  testo=testo.trim()+testoCerchio;
}

function myFunc() {
  a=0;
}
