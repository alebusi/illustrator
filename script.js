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
  $("textarea:contains('_')").css("color","red");
  /*
    var input = document.getElementById ("testo");
            if ('selectionStart' in input) {
                input.style.userSelect="none";
                input.selectionStart = position;
                input.selectionEnd = position+1;
                input.focus ();
              //input.blur ();
            }
    /*var input2 = document.getElementById ("asx");
            if ('selectionStart' in input) {
                input2.selectionStart = position;
                input2.selectionEnd = position+1;
                input2.focus ();
            }*/
}
