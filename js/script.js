function getValue() {
    var p_str = document.getElementById("p").value;
    var p = parseInt(p_str);
    var q_str = document.getElementById("q").value;
    var q = parseInt(q_str);
    pq(p, q);
 
   

  }  

function pq(p, q) {
    var del1 = p * -0.5;
    var del2 = Math.pow(p * 0.5, 2) - q;
  
  
    var svar1 = del1 + Math.sqrt(del2);
    var svar2 = del1 - Math.sqrt(del2);
  
    if (isNaN(svar1) || isNaN(svar2)) {
       console.log("funktionen skar inte x axeln");
    } else {
        console.log(svar1);
        console.log(svar2);
        document.getElementById("pqsvar2").innerHTML ="x1 blir : " + svar1;
        document.getElementById("pqsvar1").innerHTML ="x2 blir : " + svar2;
    }
  }
  
  function readValue(){
  var a_str = document.getElementById("a").value;
  var a = parseInt(a_str);
  var b_str = document.getElementById("b").value;
  var b = parseInt(b_str);
  var c_str = document.getElementById("c").value;
  var c = parseInt(c_str);
  if(isNaN( c)){
    Phytagorasc(a,b);
   }
   if(isNaN( a)){
    Phytagorasa(b,c);
   }
   if(isNaN( b)){
    Phytagorasb(a,c);
   }
  }

  function Phytagorasc(a,b){
    var del1 = Math.pow(a, 2);
    var del2 = Math.pow(b, 2);
    var del3 = del1 += del2;
    var svar = Math.sqrt(del3);
    console.log(svar);
    document.getElementById("svar").innerHTML ="C : " + svar;
    }
  function Phytagorasa(b,c){
    var del1 = Math.pow(b, 2);
    var del2 = Math.pow(c, 2);
    var del3 = del2 - del1;
    var svar= Math.sqrt(del3);
    console.log(svar);
    document.getElementById("svar").innerHTML ="A : " + svar;

  }
  function Phytagorasb(a,c){
    var del1 = Math.pow(a, 2);
    var del2 = Math.pow(c, 2);
    var del3 = del2 - del1;
    var svar= Math.sqrt(del3);
    console.log(svar);
    document.getElementById("svar").innerHTML ="B : " + svar;

  }

    function summonValue(){
            var x1_str = document.getElementById("x1").value;
            var x1 = parseInt(x1_str);
            var y1_str = document.getElementById("y1").value;
            var y1 = parseInt(y1_str);
            var x2_str = document.getElementById("x2").value;
            var x2 = parseInt(x2_str);
            var y2_str = document.getElementById("x2").value;
            var y2 = parseInt(y2_str);
            rätfunktion(x1,y1,x2,y2);
    }

    function rätfunktion(x1,y1,x2,y2){
     var del1k = y2 - y1;
     var del2k = x2 - x1;
     var k = del1k / del2k;
     var del1m = k * x2;
     var m = y2 - del1m;
     document.getElementById("rät1").innerHTML = "K : " + k;
     document.getElementById("rät2").innerHTML = "M : " + m;

    }