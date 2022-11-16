var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-modal");
var dModalT = document.getElementById("modal__text");

closeButton.addEventListener("click", function () { modal.style.display = "none" });
window.addEventListener("click", function (event) {     if (event.target == modal) {
    modal.style.display = "none";
}});


const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const numbers = /[1234567890]/;
const letters = /[ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz]/;
const spaces = /[ ]/

function showModal(message) {
    modal.style.display = "block";
    dModalT.textContent = message;
  }
  
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const date = document.getElementById("date");
const addModalCliente = document.getElementById("add-modal-cliente");

addModalCliente.addEventListener("click", validateAddClient);

function validateAddClient(){
    validateDate();
    validateLastName();
    validateName();
}

function validateName() {
    let bandera = false
    let vName = name.value;
  
    if (vName.length == 0) {
      showModal("No deje el nombre vacio");
    }
    else if (symbols.test(vName)) {
      showModal("No se permiten simbolos en el nombre");
    }
    else if (spaces.test(vName)) {
      showModal("No se permiten espacios en el nombre");
    }
    else if (numbers.test(vName)) {
      showModal("No se permiten numeros en el nombre");
    }
    else {
      bandera = true;
    }
    return bandera;
  }

  function validateLastName() {
    let bandera = false
    let vLastName = lastName.value;
  
    if (vLastName.length == 0) {
      showModal("No deje el apellido vacio");
    }
    else if (symbols.test(vLastName)) {
      showModal("No se permiten simbolos en el apellido");
    }
    else if (numbers.test(vLastName)) {
      showModal("No se permiten numeros en el apellido");
    }
    else {
      bandera = true;
    }
    return bandera;
  }

  function validateDate() {
    let bandera = false
    let vDate = date.value;
    if (vDate.length == 0) {
      showModal("No deje la fecha vacia");
    }
    else if (letters.test(vDate)) {
      showModal("No se permiten letras en la fecha");
    }

    else {
      bandera = true;
    }
    return bandera;
  }