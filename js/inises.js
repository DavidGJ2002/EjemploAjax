const button = document.querySelector('#botonenv');

console.log(button);
button.addEventListener('click',(event) =>{
    event.preventDefault();

    let correo = document.forms["formlogin"]["usermail"].value;
    let contra = document.forms["formlogin"]["userpassword"].value;
    if (correo == "") {
      alert("Introduce tu email");
      return false;
    }

    if (contra == "") {
      alert("Introduce tu contraseña");
      return false;
    }

    if ((correo == "") && (contra == "")) {
      alert("Introduce tu correo y contraseña");
      return false;
    }

    event.preventDefault();
});
