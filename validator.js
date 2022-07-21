const validator = {
  // ...
  maskify: function (creditCardNumber) {
    let numberMasked;
    if (creditCardNumber.length > 4) {
      numberMasked =
        "#".repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);

      return numberMasked;
    } else {
      return creditCardNumber;
    }
  },

  isValid: function (creditCardNumber) {
    let numberInProcess = [];
    let sumaDigitos = 0;
    for (let i = 0, l = creditCardNumber.length; i < l; i++) {
      if ((i + 1) % 2 === 0) {
        if (parseInt(creditCardNumber[i]) * 2 > 9) {
          numberInProcess.push(parseInt(creditCardNumber[i]) * 2 - 9);
        } else {
          numberInProcess.push(parseInt(creditCardNumber[i] * 2));
        }
      } else {
        numberInProcess.push(parseInt(creditCardNumber[i]));
      }
      sumaDigitos = sumaDigitos + numberInProcess[i];
    }

    if (creditCardNumber.length > 0 && sumaDigitos % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  company: function (creditCardNumber) {
    if (parseInt(creditCardNumber[0]) === 4) {
      return 4;
    } else if (parseInt(creditCardNumber[0]) === 5) {
      return 5;
    }
  },
};

export default validator;
