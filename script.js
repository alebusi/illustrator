var intestazione='<svg viewBox="-10 -10 120 120">';
var coda="\" /></svg>";
//var griglia='<path id="griglia" d=\"M0 0 h100 m0 0 v100 m0 0 h-100 m0 0 v-100 m25 0 v100 M50 0 v100 M75 0 v100 M0 25 h100 M0 50 h100 M0 75 h100"/>';
var griglia='<path id="griglia" d=\"M 0 0 v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100v100 m10 -100M0 0 h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m-100 10h100 m0 0 v-100" />';
var nPath='<path d=\"M 0 0';
var testo="";
var pos=0;
var cursore="_";
var copia;
var ix=1;

function eliminaCarattere(elem) {
    scriviTxt(elem,'x');
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		   scriviTxt(elem,'x'); 
	  }, 300);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

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
    //testo=testo+'"/> '+aggPath(0);
    testo1=testo.substring(0,pos)+ '"/> '+aggPath(0);
    //testo1=testo1.replace(cursore,"")+cursore;
    testo=testo1 + testo.substring(pos);
    pos=testo1.length;
    //pos=testo.length;
  }
  else if (car == "c") {
    ultposX=testo.lastIndexOf("x");
    if (ultposX > -1) {
       copia=testo.substring(ultposX+1);
       copia=copia.replace("_","");
       testo=testo.substring(0,ultposX);
       pos=testo.length;
    }
  }
  else if (car == "i") {
    testo=testo + copia;
    pos=testo.length;
  }
  else if (car == "f") {
    testo=intestazione+" "+aggPath(1)+" "+testo.replace(/_/g,"")+coda;
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
    if (car == "w") car="x";
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

function muoviCur(direzione) {
    muoviCursore(direzione);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
	muoviCursore(direzione); 
	  }, 300);
}

function muoviCursore(direzione) {
  testo=document.getElementById("testo").value;
  testo=testo.replace(cursore, "");
  //alert("pos"+pos+"lt "+testo.length);
  if (direzione == 99) {
    //testo=testo+cursore;
    pos=testo.length;
    document.getElementById("testo").value = testo;
  }
  else if (direzione == -10) {
    pos=0;
    //alert("pos"+pos);
    testo=cursore + testo.substring(pos); 
    document.getElementById("testo").value = testo;
  }
  else if (pos+direzione >-1 && pos+direzione <= testo.length) {
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
  ultposV=testo.lastIndexOf("v");
  switch (Math.max(ultposQ, ultposH, ultposL, ultposV)) {
     case ultposQ: operaz='q';break;
     case ultposH: operaz='h';break;
     case ultposL: operaz='l';break;
     case ultposV: operaz='v';break;
  }
  if (operaz == 'q') { 		/* per cerchio */
    raggio1=testo.substring(ultposQ+1,testo.lastIndexOf(" "));
    raggio2=testo.substring(testo.lastIndexOf(" ")+1);
    raggio1=raggio1.replace(" ","");
    raggio2=raggio2.replace(" ","");
    if (raggio1 != raggio2) {
        testo=testo.substring(0,testo.lastIndexOf(" "));
        testoCerchio=" 0 " +raggio1+" "  +raggio2+
                 " t-"+raggio1+" "  +raggio2+
                 " t-"+raggio1+" -" +raggio2+
                 " t" +raggio1+" -" +raggio2+" z ";
    }
    else {
	testo=testo.substring(0,testo.lastIndexOf("q")-1);
	testoCerchio=" a" +raggio1+" "+raggio2+
                     " 0 1 0 "+toString(parseInt(raggio1)*2)+" 0 "+
		     " a" +raggio1+" "+raggio2+
                     " 0 1 0 "+toString(parseInt(raggio1)*-2)+" 0"
    }
    testo=testo.trim()+testoCerchio;
  } else if (operaz == 'l') { 	/* per Rombo */
    raggio1=testo.substring(ultposL+1,testo.lastIndexOf(" "));
    raggio2=testo.substring(testo.lastIndexOf(" ")+1);
    raggio1=raggio1.replace(" ","");
    raggio2=raggio2.replace(" ","");
    testoCerchio=" l-"+raggio1+" "  +raggio2+
                 " l-"+raggio1+" -" +raggio2+
                 " z ";
    testo=testo.trim()+testoCerchio;   
  } else if (operaz == 'v') {
    larghezza=testo.substring(ultposV+1,testo.lastIndexOf(" "));
    altezza=testo.substring(testo.lastIndexOf(" ")+1);
    profondita=testo.substring(testo.lastIndexOf(" ")+1);
    raggio1=raggio1.replace(" ","");
    raggio2=raggio2.replace(" ","");
    testoCerchio=" l-"+raggio1+" "  +raggio2+
                 " l-"+raggio1+" -" +raggio2+
                 " z ";
    testo=testo.trim()+testoCerchio;   
  } else if (operaz == 'h') {  /* per rettangolo e quadrato */
    lato1=testo.substring(ultposH+1,testo.lastIndexOf(" "));
    lato2=testo.substring(testo.lastIndexOf(" ")+1);
    testoRett=" v"+lato2+
                 " h-"+lato1+
                 " z ";
    testo=testo.substring(0,testo.lastIndexOf(" "));
    testo=testo.trim()+testoRett;    
  }
}

function aggPath(Indice) {
  ix=ix+1;
  if (Indice == 1) ix=1;
  nPath='<path class="i'+ix+'" d=\"M 0 0';
  return nPath;
}

function myFunc() {
  a=0;
}
