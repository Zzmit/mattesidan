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
   return "svar1 = " +svar1 + " svar2 = " + svar2;
    }
  }
  module.exports = { pq };