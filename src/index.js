import validator from "./validator.js";

document.getElementById("fnumber").addEventListener("blur", hide);
document.getElementById("formulario").addEventListener("submit", validNumber);
let creditCardNumber;

function hide(event) {
  creditCardNumber = event.target.value;

  companyImg(creditCardNumber);

  event.target.type = "text";
  event.target.value = validator.maskify(creditCardNumber);
  if (validator.isValid(creditCardNumber)) {
    document.getElementById("isValid").style = "display:block";
    document.getElementById("isValid").style.color = "green";
    document.getElementById("isValid").innerHTML = "Número de tarjeta válido";
  } else {
    document.getElementById("isValid").style = "display:block";
    document.getElementById("isValid").innerHTML =
      "Número de tarjeta no es válido";
  }
}

function companyImg(creditCardNumber) {
  if (validator.company(creditCardNumber) === 4) {
    document.getElementById("company").innerHTML =
      '<img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg">';
  } else if (validator.company(creditCardNumber) === 5) {
    document.getElementById("company").innerHTML =
      '<img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-1.png">';
    document.getElementById("company").style = "display:block";
  }
}

function validNumber(event) {
  event.preventDefault();
  const formulario = document.getElementById("formulario");
  if (validator.isValid(creditCardNumber) === true) {
    formulario.submit();
  } else {
    alert("El número de tarjeta no es válido");
  }
}
