import validator from "./validator.js";

/*function hide() {
  let number = document.getElementById("fnumber");
  number.value = validator.maskify(number.value);
}*/

document.getElementById("fnumber").addEventListener("blur", hide);

function hide(event) {
  let creditCardNumber = event.target.value;

  companyImg(creditCardNumber);

  event.target.type = "text";
  event.target.value = validator.maskify(creditCardNumber);
  if (validator.isValid(creditCardNumber) === true) {
    document.getElementById("isValid").style = "display:block";
    document.getElementById("isValid").innerHTML = "Número de tarjeta válido";
    //aqui poner un icono mejor
  } else {
    document.getElementById("isValid").style = "display:block";
    document.getElementById("isValid").innerHTML =
      "Número de tarjeta no es válido";
  }
}

function companyImg(creditCardNumber) {
  if (validator.company(creditCardNumber) === true) {
    console.log(validator.company(creditCardNumber));
    document.getElementById("company").innerHTML =
      '<img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg">';
  } else {
    console.log(validator.company(creditCardNumber));
    document.getElementById("company").innerHTML =
      '<img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-1.png">';
    document.getElementById("company").style = "display:block";
  }
}

console.log(validator);
