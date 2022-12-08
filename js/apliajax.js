const boton = document.querySelector('#botonenv');

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'archivo.txt', true);
  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var mostrar = document.getElementById('demo');
      mostrar.innerHTML = xhttp.responseText;
    }
  }

    xhttp.send();
}

boton.addEventListener('click', loadDoc);
