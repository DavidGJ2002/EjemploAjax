const boton = document.querySelector("#botonenv");

function loadDoc() {
  var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
       console.log(xhttp.readyState);
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "archivo.txt", true);
    xhttp.send();
}

boton.addEventListener("click", loadDoc);
