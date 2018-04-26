  
  //Variables for functionality of the converter
  var measure = parseInt(document.getElementById("value1").value);
  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';



function fToM() {

console.flag="message"; 
 document.getElementbyId("resultsentence").innerHTML = message;
}

  


