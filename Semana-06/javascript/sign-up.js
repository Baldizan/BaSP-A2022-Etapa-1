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
    var submitButton = document.getElementById("suSubmit");


    function nameErrorMsg() {
        if (hasNumber(nameInput.value)) {
            nameInput.style.border = "1px solid red";
            nameError.innerHTML = "First Name cannot contain numbers";
            return "First Name cannot contain numbers";
        } if (nameInput.value.length < 2) {
            nameInput.style.border = "1px solid red";
            nameError.innerHTML = "First Name is required and must have at least two (2) characters";
            return "First Name is required and must have at least two (2) characters";
        } else {
            return "";
        }
    };

    function lastNameErrorMsg() {
        if (hasNumber(lastNameInput.value)) {
            lastNameInput.style.border = "1px solid red";
            lastNameError.innerHTML = "Last Name cannot contain numbers";
            return "Last Name cannot contain numbers";
        } if (lastNameInput.value.length < 2) {
            lastNameInput.style.border = "1px solid red";
            lastNameError.innerHTML = "Last Name is required and must have at least two (2) characters";
            return "Last Name is required and must have at least two (2) characters";
        } else {
            return "";
        }
    };

    function dniErrorMsg() {
        if (!dniInput.value) {
            dniError.innerHTML = "DNI is required";
            dniInput.style.border = "1px solid red";
            return "DNI is required";
        }
        if (isNaN(dniInput.value)) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Invalid - DNI can only contain numbers";
        } if (dniInput.value != parseInt(dniInput.value)) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Invalid - DNI can only contain numbers";
        } if (dniInput.value.length < 8) {
            dniInput.style.border = "1px solid red";
            dniError.innerHTML = "Invalid - DNI must have at least eight (8) numbers";
            return "Invalid - DNI must have at least eight (8) numbers";
        } else {
            return "";
        }
    };

    function birthdateErrorMsg() {
        var today = new Date().toJSON().slice(0, 10);
        if (!birthdateInput.value) {
            birthdateError.innerHTML = "Birth Date is required";
            birthdateInput.style.border = "1px solid red";
            return "Birth Date is required";
        }
        if (birthdateInput.value > today) {
            birthdateError.innerHTML = "Invalid Birth Date - Cannot choose future date";
            birthdateInput.style.border = "1px solid red";
            return "Invalid Birth Date - Cannot choose future date";
        } else {
            return "";
        }
    };

    function emailErrorMsg() {
        if (!emailInput.value) {
            emailError.innerHTML = "Email Address is required";
            emailInput.style.border = "1px solid red";
            return "Email Address is required";
        } if (!emailValidation(emailInput.value)) {
            emailError.innerHTML = "Invalid Email Address";
            emailInput.style.border = "1px solid red";
            return "Invalid Email Address";
        } else {
            return "";
        }
    };

    function repEmailErrorMsg() {
        if (!repEmailInput.value) {
            repEmailError.innerHTML = "Confirming Email Address is required";
            repEmailInput.style.border = "1px solid red";
            return "Confirming Email Address is required";
        }
        if (repEmailInput.value != emailInput.value) {
            repEmailError.innerHTML = "Email Address does not match";
            repEmailInput.style.border = "1px solid red";
            return "Email Address does not match";
        } else {
            return "";
        }
    };

    function addressErrorMsg() {
        var space = addressInput.value.indexOf(" ");
        var beforeSpace = addressInput.value.substring(0, space);
        var afterSpace = addressInput.value.substring(space + 1);
        if (!addressInput.value) {
            addressError.innerHTML = "Address is required";
            addressInput.style.border = "1px solid red";
            return "Address is required";
        } if (!isNaN(beforeSpace)) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "Input cannot start with numbers";
            return "Input cannot start with numbers";
        } if (afterSpace != parseInt(afterSpace)) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "Input cannot end with alphabetical characters";
            return "Input cannot end with alphabetical characters";
        } if (!addressInput.value.indexOf(" ")) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "Input must contain a space to separate aphabetical and numerical characters";
            return "Input must contain a space to separate aphabetical and numerical characters";
        } if (addressInput.value.length < 5) {
            addressInput.style.border = "1px solid red";
            addressError.innerHTML = "Input must contain at least five (5) characters";
            return "Input must contain at least five (5) characters";
        } else {
            return "";
        }
    };

    function locationErrorMsg() {
        if (!locationInput.value) {
            locationError.innerHTML = "Location is required";
            locationInput.style.border = "1px solid red";
            return "Location is required";
        }
        if ((!hasNumber(locationInput.value))) {
            locationInput.style.border = "1px solid red";
            locationError.innerHTML = "Location must have numbers";
            return "Location must have numbers";
        } if (locationInput.value.length < 4) {
            locationInput.style.border = "1px solid red";
            locationError.innerHTML = "Location must contain at least three (3) characters";
            return "Location must contain at least three (3) characters";
        } else {
            return "";
        }
    };

    function postalCodeErrorMsg() {
        if (!postalCodeInput.value) {
            postalCodeError.innerHTML = "Postal Code is required";
            postalCodeInput.style.border = "1px solid red";
            return "Postal Code is required";
        }
        if (postalCodeInput.value != parseInt(postalCodeInput.value)) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "Postal Code can only contain numbers";
            return "Postal Code can only contain numbers";
        } if (postalCodeInput.value.length < 4) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "Postal code must contain at least four (4) characters";
            return "Postal code must contain at least four (4) characters";
        } if (postalCodeInput.value.length > 5) {
            postalCodeInput.style.border = "1px solid red";
            postalCodeError.innerHTML = "Postal code cannot contain more than five (5) characters";
            return "Postal code cannot contain more than five (5) characters";
        } else {
            return "";
        }
    };

    function phoneErrorMsg() {
        if (!phoneInput.value) {
            phoneError.innerHTML = "Phone is required";
            phoneInput.style.border = "1px solid red";
            return "Phone is required";
        }
        if (phoneInput.value != parseInt(phoneInput.value)) {
            phoneInput.style.border = "1px solid red";
            phoneError.innerHTML = "Phone must only contain numbers";
            return "Phone must only contain numbers";
        } if (phoneInput.value.length != 10) {
            phoneInput.style.border = "1px solid red";
            phoneError.innerHTML = "Phone must contain ten (10) numbers";
            return "Phone must contain ten (10) numbers";
        } else {
            return "";
        }
    };

    function passwordErrorMsg() {
        if (!passwordInput.value) {
            passwordError.innerHTML = "Password is required";
            passwordInput.style.border = "1px solid red";
            return "Password is required";
        }
        if (!alphanumPwd(passwordInput.value)) {
            passwordInput.style.border = "1px solid red";
            passwordError.innerHTML = "Password must contain numbers and letters";
            return "Password must contain numbers and letters";
        } if (passwordInput.value.length < 8) {
            passwordInput.style.border = "1px solid red";
            passwordError.innerHTML = "Password must be at least eight (8) characters long";
            return "Password must be at least eight (8) characters long";
        } else {
            return "";
        }
    };

    function repPasswordErrorMsg() {
        if (!repPasswordInput.value) {
            repPasswordError.innerHTML = "Confirming Password is required";
            repPasswordInput.style.border = "1px solid red";
            return "Confirming Password is required";
        }
        if (repPasswordInput.value != passwordInput.value) {
            repPasswordError.innerHTML = "Password does not match";
            repPasswordInput.style.border = "1px solid red";
            return "Password does not match";
        } else {
            return "";
        }
    };

    function submitValidation(event) {
        if (
            nameErrorMsg() == "" &&
            lastNameErrorMsg() == "" &&
            dniErrorMsg() == "" &&
            birthdateErrorMsg() == "" &&
            emailErrorMsg() == "" &&
            repEmailErrorMsg() == "" &&
            addressErrorMsg() == "" &&
            locationErrorMsg() == "" &&
            postalCodeErrorMsg() == "" &&
            phoneErrorMsg() == "" &&
            passwordErrorMsg() == "" &&
            repPasswordErrorMsg() == ""
        ) {
            alert(
                "first name: " +
                nameInput.value +
                "last name: " +
                lastNameError.value +
                "DNI: " +
                dniInput.value +
                "Birthdate : " +
                birthdateInput.value +
                "email: " +
                emailInput.value +
                "confirm email: " +
                repEmailInput.value +
                "address: " +
                addressInput.value +
                "location: " +
                locationInput.value +
                "postal code: " +
                postalCodeInput.value +
                "phone: " +
                phoneInput.value +
                "password: " +
                passwordInput.value +
                "confirm password: " +
                repPasswordInput.value
            );
        } else {
            event.preventDefault();
            alert("Credentials are incorrect:\r\n" +
                nameErrorMsg() + "\r\n" +
                lastNameErrorMsg() + "\r\n" +
                dniErrorMsg() + "\r\n" +
                birthdateErrorMsg() + "\r\n" +
                emailErrorMsg() + "\r\n" +
                repEmailErrorMsg() + "\r\n" +
                addressErrorMsg() + "\r\n" +
                locationErrorMsg() + "\r\n" +
                postalCodeErrorMsg() + "\r\n" +
                phoneErrorMsg() + "\r\n" +
                passwordErrorMsg() + "\r\n" +
                repPasswordErrorMsg())
        }
    }

    nameInput.addEventListener("blur", nameErrorMsg);
    nameInput.addEventListener("focus", hideFirstNameMsg);
    lastNameInput.addEventListener("blur", lastNameErrorMsg);
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
    submitButton.addEventListener("click", submitValidation)
}
