function emailValidation(email) {
    var emailRegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailRegExp.test(email);
};

function hasNumber(input) {
    var hasNumber = false;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (!isNaN(element)) {
            hasNumber = true;
        };
    };
    return hasNumber;
};

function alphanumPwd(input) {
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (isNaN(element)) {
            hasLetter = true;
        }
        if (!isNaN(element)) {
            hasNumber = true;
        }
    }
    return hasLetter && hasNumber;
}

function hideFirstNameMsg() {
    var nameError = document.getElementById("nameError");
    var nameInput = document.getElementById("suName");
    nameError.innerHTML = "&nbsp;";
    nameInput.style.border = "1px solid #373867";
};

function hideLastNameMsg() {
    var lastNameError = document.getElementById("lastNameError");
    var lastNameInput = document.getElementById("suLastName");
    lastNameError.innerHTML = "&nbsp;";
    lastNameInput.style.border = "1px solid #373867";
};

function hideDniErrorMsg() {
    var dniError = document.getElementById("dniError");
    var dniInput = document.getElementById("suDni");
    dniError.innerHTML = "&nbsp;";
    dniInput.style.border = "1px solid #373867";
};

function hideBirthdateErrorMsg() {
    var birthdateError = document.getElementById("birthdateError");
    var birthdateInput = document.getElementById("suBirthdate");
    birthdateError.innerHTML = "&nbsp;";
    birthdateInput.style.border = "1px solid #373867";
};

function hideEmailErrorMsg() {
    var emailError = document.getElementById("emailError");
    var emailInput = document.getElementById("suEmail");
    emailError.innerHTML = "&nbsp;";
    emailInput.style.border = "1px solid #373867";
};

function hideRepEmailErrorMsg() {
    var repEmailInput = document.getElementById("suRepEmail");
    var repEmailError = document.getElementById("repEmailError");
    repEmailError.innerHTML = "&nbsp;";
    repEmailInput.style.border = "1px solid #373867";
};

function hideAddressErrorMsg() {
    var addressInput = document.getElementById("suAddress");
    var addressError = document.getElementById("addressError");
    addressError.innerHTML = "&nbsp;";
    addressInput.style.border = "1px solid #373867";
};

function hideLocationErrorMsg() {
    var locationInput = document.getElementById("suLocation");
    var locationError = document.getElementById("locationError");
    locationError.innerHTML = "&nbsp;";
    locationInput.style.border = "1px solid #373867";
};

function hidePostalCodeErrorMsg() {
    var postalCodeInput = document.getElementById("suCode");
    var postalCodeError = document.getElementById("codeError");
    postalCodeError.innerHTML = "&nbsp;";
    postalCodeInput.style.border = "1px solid #373867";
};

function hidePhoneErrorMsg() {
    var phoneInput = document.getElementById("suPhone");
    var phoneError = document.getElementById("phoneError");
    phoneError.innerHTML = "&nbsp;";
    phoneInput.style.border = "1px solid #373867";
};

function hidePasswordErrorMsg() {
    var passwordInput = document.getElementById("suPassword");
    var passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "&nbsp;";
    passwordInput.style.border = "1px solid #373867";
};

function hideRepPasswordErrorMsg() {
    var repPasswordInput = document.getElementById("suRepPassword");
    var repPasswordError = document.getElementById("repPasswordError");
    repPasswordError.innerHTML = "&nbsp;";
    repPasswordInput.style.border = "1px solid #373867";
};

window.onload = function () {
    var nameInput = document.getElementById("suName");
    var nameError = document.getElementById("nameError");
    var lastNameInput = document.getElementById("suLastName");
    var lastNameError = document.getElementById("lastNameError");
    var dniInput = document.getElementById("suDni");
    var dniError = document.getElementById("dniError");
    var birthdateInput = document.getElementById("suBirthdate");
    var birthdateError = document.getElementById("birthdateError");
    var emailInput = document.getElementById("suEmail");
    var emailError = document.getElementById("emailError");
    var repEmailInput = document.getElementById("suRepEmail");
    var repEmailError = document.getElementById("repEmailError");
    var addressInput = document.getElementById("suAddress");
    var addressError = document.getElementById("addressError");
    var locationInput = document.getElementById("suLocation");
    var locationError = document.getElementById("locationError");
    var postalCodeInput = document.getElementById("suCode");
    var postalCodeError = document.getElementById("codeError");
    var phoneInput = document.getElementById("suPhone");
    var phoneError = document.getElementById("phoneError");
    var passwordInput = document.getElementById("suPassword");
    var passwordError = document.getElementById("passwordError");
    var repPasswordInput = document.getElementById("suRepPassword");
    var repPasswordError = document.getElementById("repPasswordError");

    function nameNumErrorMsg() {
        if (hasNumber(nameInput.value)) {
            nameInput.style.border = "1px solid red";
            nameError.innerHTML = "First Name cannot contain numbers";
            return "First Name cannot contain numbers";
        } else {
            return "";
        }
    };

    function lastNameNumErrorMsg() {
        if (hasNumber(lastNameInput.value)) {
            lastNameInput.style.border = "1px solid red";
            lastNameError.innerHTML = "Last Name cannot contain numbers";
            return "Last Name cannot contain numbers";
        } else {
            return "";
        }
    };

    function dniErrorMsg() {
        if (isNaN(dniInput.value)) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Incorrect";
        } if (dniInput.value != parseInt(dniInput.value)) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Incorrect";
        } if (dniInput.value.length < 8) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI must have at least eight (8) numbers";
            return "Incorrect";
        } else {
            return "";
        }
    };

    function birthdateErrorMsg() {
        var today = new Date().toJSON().slice(0, 10);
        if (birthdateInput.value > today) {
            birthdateError.innerHTML = "Invalid birth date";
            birthdateInput.style.border = "1px solid red";
            return "Incorrect";
        } else {
            return "";
        }
    };

    function emailErrorMsg() {
        if (!emailValidation(emailInput.value)) {
            emailError.innerHTML = "Invalid Email Address";
            emailInput.style.border = "1px solid red";
            return "Incorrect email";
        } else {
            return "";
        }
    };

    function repEmailErrorMsg() {
        if (repEmailInput.value != emailInput.value) {
            repEmailError.innerHTML = "Email Address does not match";
            repEmailInput.style.border = "1px solid red";
            return "Confirm Email does not match";
        } else {
            return "";
        }
    };

    function addressErrorMsg() {
        var space = addressInput.value.indexOf(" ");
        var beforeSpace = addressInput.value.substring(0, space)
        var afterSpace = addressInput.value.substring(space + 1)
        if (!isNaN(beforeSpace)) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "start cannot contain numbers";
            return "Start cannot contain numbers";
        } if (isNaN(afterSpace)) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "end must contain numbers";
            return "Start cannot contain numbers";
        } if (!addressInput.value.indexOf(" ")) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "must contain space to separate letters and numbers";
            return "Start cannot contain numbers";
        } if (addressInput.value.length < 5) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "must be at least 5ch long";
            return "Start cannot contain numbers";
        } else {
            return "";
        }
    };

    function locationErrorMsg() {
        if ((!hasNumber(locationInput.value))) {
            locationInput.style.border = "1px solid red";
            locationError.innerHTML = "no num";
            return "Incorrect";
        } if (locationInput.value.length < 4) {
            locationInput.style.border = "1px solid red";
            locationError.innerHTML = "Invalid length";
            return "Incorrect";
        } else {
            return "";
        }
    };

    function postalCodeErrorMsg() {
        if (isNaN(postalCodeInput.value)) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "no num";
            return "Incorrect";
        } if (postalCodeInput.value.length < 4) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "Invalid length short";
            return "Incorrect";
        } if (postalCodeInput.value.length > 5) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "Invalid length long";
            return "Incorrect";
        } else {
            return "";
        }
    };

    function phoneErrorMsg() {
        if (isNaN(phoneInput.value)) {
            phoneInput.style.border = "1px solid red";
            phoneError.innerHTML = "no num";
            return "Incorrect";
        } if (phoneInput.value.length != 10) {
            phoneInput.style.border = "1px solid red";
            phoneError.innerHTML = "Invalid length";
            return "Incorrect";
        } else {
            return "";
        }
    };

    function passwordErrorMsg() {
        if (!alphanumPwd(passwordInput.value)) {
            passwordInput.style.border = "1px solid red";
            passwordError.innerHTML = "no alphanumPwd";
            return "Incorrect password";
        } if (passwordInput.value.length < 8) {
            passwordInput.style.border = "1px solid red";
            passwordError.innerHTML = "length";
            return "Incorrect password";
        } else {
            return "";
        }
    };

    function repPasswordErrorMsg() {
        if (repPasswordInput.value != passwordInput.value) {
            repPasswordError.innerHTML = "Password does not match";
            repPasswordInput.style.border = "1px solid red";
            return "Password does not match";
        } else {
            return "";
        }
    };

    nameInput.addEventListener("blur", nameNumErrorMsg);
    nameInput.addEventListener("focus", hideFirstNameMsg);
    lastNameInput.addEventListener("blur", lastNameNumErrorMsg);
    lastNameInput.addEventListener("focus", hideLastNameMsg);
    dniInput.addEventListener("blur", dniErrorMsg);
    dniInput.addEventListener("focus", hideDniErrorMsg);
    birthdateInput.addEventListener("blur", birthdateErrorMsg);
    birthdateInput.addEventListener("focus", hideBirthdateErrorMsg);
    emailInput.addEventListener("blur", emailErrorMsg);
    emailInput.addEventListener("focus", hideEmailErrorMsg);
    repEmailInput.addEventListener("blur", repEmailErrorMsg);
    repEmailInput.addEventListener("focus", hideRepEmailErrorMsg);
    addressInput.addEventListener("blur", addressErrorMsg);
    addressInput.addEventListener("focus", hideAddressErrorMsg);
    locationInput.addEventListener("blur", locationErrorMsg);
    locationInput.addEventListener("focus", hideLocationErrorMsg);
    postalCodeInput.addEventListener("blur", postalCodeErrorMsg);
    postalCodeInput.addEventListener("focus", hidePostalCodeErrorMsg);
    phoneInput.addEventListener("blur", phoneErrorMsg);
    phoneInput.addEventListener("focus", hidePhoneErrorMsg);
    passwordInput.addEventListener("blur", passwordErrorMsg);
    passwordInput.addEventListener("focus", hidePasswordErrorMsg);
    repPasswordInput.addEventListener("blur", repPasswordErrorMsg);
    repPasswordInput.addEventListener("focus", hideRepPasswordErrorMsg);
}
