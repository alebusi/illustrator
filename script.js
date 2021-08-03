var intestazione='<svg viewBox="-10 -10 120 120">';
var coda="\" /></svg>";
var griglia='<path id="griglia" d=\"M0 0 h100 m0 0 v100 m0 0 h-100 m0 0 v-100 m25 0 v100 M50 0 v100 M75 0 v100 M0 25 h100 M0 50 h100 M0 75 h100"/>';
var nPath='<path d=\"M 0 0';
var testo="";
var pos=0;
var cursore="_";

function scriviTxt(elem,car) {
  if (elem.className == "tasto") {
    elem.className = "tasto2";
  } else if (elem.className == "tasto2") {
    elem.className="tasto";
  }
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
    figura();
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
  if (direzione == 99) {
    testo=testo+cursore;
    pos=testo.length-1;
    document.getElementById("testo").value = testo;
  } else if (pos+direzione >-1 && pos+direzione <= testo.length) {
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

function figura() {
  ultposQ=testo.lastIndexOf("q");
  ultposH=testo.lastIndexOf("h");
  ultposL=testo.lastIndexOf("l");
  if (ultposQ > ultposH && ultposQ > ultposL) {
    operaz='q';
  } else if (ultposH > ultposL) {
    operaz='h';
  } else {
    operaz='l';
  }
  if (operaz == 'q') { 
    raggio1=testo.substring(ultposQ+1,testo.lastIndexOf(" "));
    raggio2=testo.substring(testo.lastIndexOf(" ")+1);
    raggio1=raggio1.replace(" ","");
    raggio2=raggio2.replace(" ","");
    testoCerchio=" 0 " +raggio1+" "  +raggio2+
                 " t-"+raggio1+" "  +raggio2+
                 " t-"+raggio1+" -" +raggio2+
                 " t" +raggio1+" -" +raggio2+" z ";
    testo=testo.substring(0,testo.lastIndexOf(" "));
    testo=testo.trim()+testoCerchio;
  } else if (operaz == 'l') {
    raggio1=testo.substring(ultposL+1,testo.lastIndexOf(" "));
    raggio2=testo.substring(testo.lastIndexOf(" ")+1);
    raggio1=raggio1.replace(" ","");
    raggio2=raggio2.replace(" ","");
    testoCerchio=" l-"+raggio1+" "  +raggio2+
                 " l-"+raggio1+" -" +raggio2+
                 " z ";
    testo=testo.trim()+testoCerchio;    
  } else if (operaz == 'h') {
    lato=testo.substring(ultposH+1);
    testoLato=" v "+lato+
                 " h-"+lato+
                 " z ";
    testo=testo.trim()+testoLato;    
  }
}

function myFunc() {
  a=0;
}
