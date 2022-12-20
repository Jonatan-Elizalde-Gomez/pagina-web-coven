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
const phone = document.getElementById("phone");
const price = document.getElementById("price");
const tonelada = document.getElementById("tonelada");
const total = document.getElementById("total");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const date = document.getElementById("date");
const addModalCliente = document.getElementById("add-modal-cliente");
const addModalVenta = document.getElementById("add-modal-venta");
const addModalCompra = document.getElementById("add-modal-compra");
const addModalCosecha = document.getElementById("add-modal-cosecha");
const addModalEvento= document.getElementById("add-modal-evento");
const addModalMerma = document.getElementById("add-modal-merma");
const addModalProducto = document.getElementById("add-modal-producto");
const addModalProveedor = document.getElementById("add-modal-proveedor");
const addModalSiembra = document.getElementById("add-modal-siembra");


if(addModalCliente != null){
  addModalCliente.addEventListener("click", validateAddClient);
}

if(addModalVenta != null){
  addModalVenta.addEventListener("click", validateAddVenta);
}

if(addModalCompra != null){
  addModalCompra.addEventListener("click", validateAddCompra);
}

if(addModalCosecha != null){
  addModalCosecha.addEventListener("click", validateAddCosecha);
}

if(addModalEvento != null){
}

if(addModalMerma != null){
  addModalMerma.addEventListener("click", validateAddMerma);
}

if(addModalProducto != null){
  addModalProducto.addEventListener("click", validateAddProducto);
}

if(addModalProveedor != null){
  addModalProveedor.addEventListener("click", validateAddProveedor);
}

if(addModalSiembra != null){
  addModalSiembra.addEventListener("click", validateAddSiembra);
}

function validateAddClient(){
  validateDate();
  validateLastName();
  validateName();
}

function validateAddVenta(){
  validateTotal();
}

function validateAddCompra(){
  validateTotal();
}

function validateAddCosecha(){
  validateTonelada();
}

function validateAddMerma(){
  validateTonelada();
}


function validateAddProducto(){
  validatePrice();
  validateName();
}

function validateAddProveedor(){
  validatePhone();
  validateName();

}

function validateAddSiembra(){
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

  function validateTotal() {
    let bandera = false
    let vTotal = total.value;
  
    if (vTotal.length == 0) {
      showModal("No deje el total vacio");
    }
    else if (symbols.test(vTotal)) {
      showModal("No se permiten simbolos en el total");
    }
    else if (letters.test(vTotal)) {
      showModal("No se permiten letras en el total");
    }
    else {
      bandera = true;
    }
    return bandera;
  }




  
  function validateTonelada() {
    let bandera = false
    let vTonelada = tonelada.value;
  
    if (vTonelada.length == 0) {
      showModal("No deje las toneladas vacias");
    }
    else if (symbols.test(vTonelada)) {
      showModal("No se permiten simbolos en las toneladas");
    }
    else if (letters.test(vTonelada)) {
      showModal("No se permiten letras en las toneladas");
    }
    else {
      bandera = true;
    }
    return bandera;
  }


  function validatePrice() {
    let bandera = false
    let vPrice = price.value;
  
    if (vPrice.length == 0) {
      showModal("No deje el precio vacio");
    }
    else if (symbols.test(vPrice)) {
      showModal("No se permiten simbolos en el precio");
    }
    else if (letters.test(vPrice)) {
      showModal("No se permiten letras en el precio");
    }
    else {
      bandera = true;
    }
    return bandera;
  }

  function validatePhone() {
    let bandera = false
    let vPhone = phone.value;
  
    if (vPhone.length < 10) {
      showModal("No es numero de telefono valido");
    }
    else if (symbols.test(vPhone)) {
      showModal("No se permiten simbolos en el telefono");
    }
    else if (letters.test(vPhone)) {
      showModal("No se permiten letras en el telefono");
    }
    else {
      bandera = true;
    }
    return bandera;
  }