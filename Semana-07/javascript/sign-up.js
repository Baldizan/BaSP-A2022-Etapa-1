var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup"

function emailValidation(email) {
    var emailRegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailRegExp.test(email);
};

function hasNumber(input) {
    var hasNumber = false;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (element == parseInt(element)) {
            hasNumber = true;
        };
    };
    return hasNumber;
};

function hasLetter(input) {
    var hasLetter = false;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (element != parseInt(element)) {
            hasLetter = true;
        };
    };
    return hasLetter;
};

function alphanumPwd(input) {
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (element != parseInt(element)) {
            hasLetter = true;
        }
        if (element == parseInt(element)) {
            hasNumber = true;
        }
    }
    return hasLetter && hasNumber;
}

function hideFirstNameMsg() {
    var nameError = document.getElementById("nameError");
    var nameInput = document.getElementById("suName");
    nameError.innerHTML = "&nbsp;";
    nameInput.classList.remove("inputError")
};

function hideLastNameMsg() {
    var lastNameError = document.getElementById("lastNameError");
    var lastNameInput = document.getElementById("suLastName");
    lastNameError.innerHTML = "&nbsp;";
    lastNameInput.classList.remove("inputError")
};

function hideDniErrorMsg() {
    var dniError = document.getElementById("dniError");
    var dniInput = document.getElementById("suDni");
    dniError.innerHTML = "&nbsp;";
    dniInput.classList.remove("inputError")
};

function hideBirthdateErrorMsg() {
    var birthdateError = document.getElementById("birthdateError");
    var birthdateInput = document.getElementById("suBirthdate");
    birthdateError.innerHTML = "&nbsp;";
    birthdateInput.classList.remove("inputError")
};

function hideEmailErrorMsg() {
    var emailError = document.getElementById("emailError");
    var emailInput = document.getElementById("suEmail");
    emailError.innerHTML = "&nbsp;";
    emailInput.classList.remove("inputError")
};

function hideRepEmailErrorMsg() {
    var repEmailInput = document.getElementById("suRepEmail");
    var repEmailError = document.getElementById("repEmailError");
    repEmailError.innerHTML = "&nbsp;";
    repEmailInput.classList.remove("inputError")
};

function hideAddressErrorMsg() {
    var addressInput = document.getElementById("suAddress");
    var addressError = document.getElementById("addressError");
    addressError.innerHTML = "&nbsp;";
    addressInput.classList.remove("inputError");
};

function hideLocationErrorMsg() {
    var locationInput = document.getElementById("suLocation");
    var locationError = document.getElementById("locationError");
    locationError.innerHTML = "&nbsp;";
    locationInput.classList.remove("inputError")
};

function hidePostalCodeErrorMsg() {
    var postalCodeInput = document.getElementById("suCode");
    var postalCodeError = document.getElementById("codeError");
    postalCodeError.innerHTML = "&nbsp;";
    postalCodeInput.classList.remove("inputError")
};

function hidePhoneErrorMsg() {
    var phoneInput = document.getElementById("suPhone");
    var phoneError = document.getElementById("phoneError");
    phoneError.innerHTML = "&nbsp;";
    phoneInput.classList.remove("inputError")
};

function hidePasswordErrorMsg() {
    var passwordInput = document.getElementById("suPassword");
    var passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "&nbsp;";
    passwordInput.classList.remove("inputError")
};

function hideRepPasswordErrorMsg() {
    var repPasswordInput = document.getElementById("suRepPassword");
    var repPasswordError = document.getElementById("repPasswordError");
    repPasswordError.innerHTML = "&nbsp;";
    repPasswordInput.classList.remove("inputError")
};

window.onload = function () {
    var nameInput = document.getElementById("suName");
    var nameError = document.getElementById("nameError");
    if (!nameInput.value) {
        nameInput.value = localStorage.getItem("First Name");
    };
    var lastNameInput = document.getElementById("suLastName");
    var lastNameError = document.getElementById("lastNameError");
    if (!lastNameInput.value) {
        lastNameInput.value = localStorage.getItem("Last Name");
    };
    var dniInput = document.getElementById("suDni");
    var dniError = document.getElementById("dniError");
    if (!dniInput.value) {
        dniInput.value = localStorage.getItem("DNI");
    };
    var birthdateInput = document.getElementById("suBirthdate");
    var birthdateError = document.getElementById("birthdateError");
    if (!birthdateInput.value) {
        birthdateInput.value = localStorage.getItem("Birthday");
    };
    var emailInput = document.getElementById("suEmail");
    var emailError = document.getElementById("emailError");
    if (!emailInput.value) {
        emailInput.value = localStorage.getItem("Email");
    };
    var repEmailInput = document.getElementById("suRepEmail");
    var repEmailError = document.getElementById("repEmailError");
    var addressInput = document.getElementById("suAddress");
    var addressError = document.getElementById("addressError");
    if (!addressInput.value) {
        addressInput.value = localStorage.getItem("Address");
    };
    var locationInput = document.getElementById("suLocation");
    var locationError = document.getElementById("locationError");
    if (!locationInput.value) {
        locationInput.value = localStorage.getItem("Location");
    };
    var postalCodeInput = document.getElementById("suCode");
    var postalCodeError = document.getElementById("codeError");
    if (!postalCodeInput.value) {
        postalCodeInput.value = localStorage.getItem("Post code");
    };
    var phoneInput = document.getElementById("suPhone");
    var phoneError = document.getElementById("phoneError");
    if (!phoneInput.value) {
        phoneInput.value = localStorage.getItem("Phone");
    };
    var passwordInput = document.getElementById("suPassword");
    var passwordError = document.getElementById("passwordError");
    if (!passwordInput.value) {
        passwordInput.value = localStorage.getItem("Password");
    };
    var repPasswordInput = document.getElementById("suRepPassword");
    var repPasswordError = document.getElementById("repPasswordError");
    var submitButton = document.getElementById("suSubmit");
    var dateSplit = birthdateInput.value.split("-");
    var dateFormat = dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[0]

    function nameErrorMsg() {
        if (!nameInput.value) {
            nameError.innerHTML = "First Name is required";
            nameInput.classList.add("inputError");
            return "DNI is required";
        } if (hasNumber(nameInput.value)) {
            nameInput.classList.add("inputError");
            nameError.innerHTML = "First Name cannot contain numbers";
            return "First Name cannot contain numbers";
        } if (nameInput.value.length < 2) {
            nameInput.classList.add("inputError");
            nameError.innerHTML = "First Name must contain at least two (2) characters";
            return "First Name must contain at least two (2) characters";
        } else {
            return "";
        }
    };

    function lastNameErrorMsg() {
        if (!lastNameInput.value) {
            lastNameError.innerHTML = "Last Name is required";
            lastNameInput.classList.add("inputError");
            return "DNI is required";
        } if (hasNumber(lastNameInput.value)) {
            lastNameInput.classList.add("inputError");
            lastNameError.innerHTML = "Last Name cannot contain numbers";
            return "Last Name cannot contain numbers";
        } if (lastNameInput.value.length < 2) {
            lastNameInput.classList.add("inputError");
            lastNameError.innerHTML = "Last Name must contain at least two (2) characters";
            return "Last Name must contain at least two (2) characters";
        } else {
            return "";
        }
    };

    function dniErrorMsg() {
        if (!dniInput.value) {
            dniError.innerHTML = "DNI is required";
            dniInput.classList.add("inputError");
            return "DNI is required";
        } if (isNaN(dniInput.value)) {
            dniInput.classList.add("inputError");
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Invalid - DNI can only contain numbers";
        } if (dniInput.value != parseInt(dniInput.value)) {
            dniInput.classList.add("inputError");
            dniError.innerHTML = "Invalid - DNI can only contain numbers";
            return "Invalid - DNI can only contain numbers";
        } if (dniInput.value.length < 8) {
            dniInput.classList.add("inputError");
            dniError.innerHTML = "Invalid - DNI must contain at least eight (8) numbers";
            return "Invalid - DNI must contain at least eight (8) numbers";
        } else {
            return "";
        }
    };

    function birthdateErrorMsg() {
        var today = new Date().toJSON().slice(0, 10);
        if (!birthdateInput.value) {
            birthdateError.innerHTML = "Birth Date is required";
            birthdateInput.classList.add("inputError");
            return "Birth Date is required";
        } if (birthdateInput.value > today) {
            birthdateError.innerHTML = "Invalid Birth Date - Cannot choose future date";
            birthdateInput.classList.add("inputError");
            return "Invalid Birth Date - Cannot choose future date";
        } else {
            return "";
        }
    };

    function emailErrorMsg() {
        if (!emailInput.value) {
            emailError.innerHTML = "Email Address is required";
            emailInput.classList.add("inputError");
            return "Email Address is required";
        } if (!emailValidation(emailInput.value)) {
            emailError.innerHTML = "Invalid Email Address";
            emailInput.classList.add("inputError");
            return "Invalid Email Address";
        } else {
            return "";
        }
    };

    function repEmailErrorMsg() {
        if (!repEmailInput.value) {
            repEmailError.innerHTML = "Confirming Email Address is required";
            repEmailInput.classList.add("inputError");
            return "Confirming Email Address is required";
        } if (repEmailInput.value != emailInput.value) {
            repEmailError.innerHTML = "Email Address does not match";
            repEmailInput.classList.add("inputError");
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
            addressInput.classList.add("inputError");
            return "Address is required";
        } if (!isNaN(+beforeSpace)) {
            addressInput.classList.add("inputError");
            addressError.innerHTML = "Input cannot start with numbers. Correct Format: letters and then numbers, separated with a blank space";
            return "Input cannot start with numbers";
        } if (afterSpace.length < 1) {
            addressInput.classList.add("inputError");
            addressError.innerHTML = "Second part must contain numbers. Correct Format: letters and then numbers, separated with a blank space";
            return "Input cannot end with alphabetical characters";
        } if (isNaN(+afterSpace)) {
            addressInput.classList.add("inputError");
            addressError.innerHTML = "Input cannot end with alphabetical characters. Correct Format: letters and then numbers, separated with a blank space";
            return "Input cannot end with alphabetical characters";
        } if (!addressInput.value.indexOf(" ")) {
            addressInput.classList("inputError");
            addressError.innerHTML = "Input must contain a space to separate aphabetical and numerical characters";
            return "Input must contain a space to separate aphabetical and numerical characters";
        } if (addressInput.value.length < 5) {
            addressInput.classList.add("inputError");
            addressError.innerHTML = "Input must contain at least five (5) characters";
            return "Input must contain at least five (5) characters";
        } else {
            return "";
        }
    };

    function locationErrorMsg() {
        if (!locationInput.value) {
            locationError.innerHTML = "Location is required";
            locationInput.classList.add("inputError");
            return "Location is required";
        } if ((!hasNumber(locationInput.value))) {
            locationInput.classList.add("inputError");
            locationError.innerHTML = "Location must contain numbers";
            return "Location must contain numbers";
        } if ((!hasLetter(locationInput.value))) {
            locationInput.classList.add("inputError");
            locationError.innerHTML = "Location must contain letters";
            return "Location must contain numbers";
        } if (locationInput.value.length < 4) {
            locationInput.classList.add("inputError");
            locationError.innerHTML = "Location must contain at least four (4) characters";
            return "Location must contain at least four (4) characters";
        } else {
            return "";
        }
    };

    function postalCodeErrorMsg() {
        if (!postalCodeInput.value) {
            postalCodeError.innerHTML = "Postal Code is required";
            postalCodeInput.classList.add("inputError");
            return "Postal Code is required";
        } if (postalCodeInput.value != parseInt(postalCodeInput.value)) {
            postalCodeInput.classList.add("inputError");
            postalCodeError.innerHTML = "Postal Code can only contain numbers";
            return "Postal Code can only contain numbers";
        } if (postalCodeInput.value.length < 4) {
            postalCodeInput.classList.add("inputError");
            postalCodeError.innerHTML = "Postal code must contain at least four (4) characters";
            return "Postal code must contain at least four (4) characters";
        } if (postalCodeInput.value.length > 5) {
            postalCodeInput.classList.add("inputError");
            postalCodeError.innerHTML = "Postal code cannot contain more than five (5) characters";
            return "Postal code cannot contain more than five (5) characters";
        } else {
            return "";
        }
    };

    function phoneErrorMsg() {
        if (!phoneInput.value) {
            phoneError.innerHTML = "Phone is required";
            phoneInput.classList.add("inputError");
            return "Phone is required";
        } if (phoneInput.value != parseInt(phoneInput.value)) {
            phoneInput.classList.add("inputError");
            phoneError.innerHTML = "Phone must only contain numbers";
            return "Phone must only contain numbers";
        } if (phoneInput.value.length != 10) {
            phoneInput.classList.add("inputError");
            phoneError.innerHTML = "Phone must contain ten (10) numbers";
            return "Phone must contain ten (10) numbers";
        } else {
            return "";
        }
    };

    function passwordErrorMsg() {
        if (!passwordInput.value) {
            passwordError.innerHTML = "Password is required";
            passwordInput.classList.add("inputError");
            return "Password is required";
        } if (!alphanumPwd(passwordInput.value)) {
            passwordInput.classList.add("inputError");
            passwordError.innerHTML = "Password must contain numbers and letters";
            return "Password must contain numbers and letters";
        } if (passwordInput.value.length < 8) {
            passwordInput.classList.add("inputError");
            passwordError.innerHTML = "Password must be at least eight (8) characters long";
            return "Password must be at least eight (8) characters long";
        } else {
            return "";
        }
    };

    function repPasswordErrorMsg() {
        if (!repPasswordInput.value) {
            repPasswordError.innerHTML = "Confirming Password is required";
            repPasswordInput.classList.add("inputError");
            return "Confirming Password is required";
        } if (repPasswordInput.value != passwordInput.value) {
            repPasswordError.innerHTML = "Password does not match";
            repPasswordInput.classList.add("inputError");
            return "Password does not match";
        } else {
            return "";
        }
    };

    function submitValidation() {
        return nameErrorMsg(nameInput.value) == "" &&
        lastNameErrorMsg(lastNameInput.value) == "" &&
        dniErrorMsg(dniInput.value) == "" &&
        birthdateErrorMsg(birthdateInput.value) == "" &&
        phoneErrorMsg(phoneInput.value) == "" &&
        addressErrorMsg(addressInput.value) == "" &&
        locationErrorMsg(locationInput.value) == "" &&
        postalCodeErrorMsg(postalCodeInput.value) == "" &&
        emailErrorMsg(emailInput.value) == "" &&
        repEmailErrorMsg(repEmailInput.value) == "" &&
        passwordErrorMsg(passwordInput.value) == "" &&
        repPasswordErrorMsg(repPasswordInput.value) == "";
    };

    function submitSignup(event) {
        event.preventDefault()
        if (submitValidation()) {
            fetch(
                url +
                "?name=" + nameInput.value +
                "&lastName=" + lastNameInput.value +
                "&dni=" + dniInput.value +
                "&dob=" + dateFormat +
                "&phone=" + phoneInput.value +
                "&address=" + addressInput.value +
                "&city=" + locationInput.value +
                "&zip=" + postalCodeInput.value +
                "&email=" + emailInput.value +
                "&password=" + passwordInput.value
                )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success == true) {
                        alert(data.msg);
                        saveCredentialsLocalStorage();
                    } else {
                        var errorMsg = "Check the errors below:\n"
                        for(i=0; i < data.errors.length; i++){
                            errorMsg += data.errors[i].msg + "\n";
                        };
                        alert(errorMsg);
                    }
                }).catch(function (error) {
                    alert(error);
                });
        } else {
            alert("One or more inputs are incorrect");
        }
    };

    function saveCredentialsLocalStorage() {
        localStorage.setItem("First Name", nameInput.value);
        localStorage.setItem("Last Name", lastNameInput.value);
        localStorage.setItem("DNI", dniInput.value);
        localStorage.setItem("Birthday", birthdateInput.value);
        localStorage.setItem("Phone", phoneInput.value);
        localStorage.setItem("Address", addressInput.value);
        localStorage.setItem("Location", locationInput.value);
        localStorage.setItem("Post code", postalCodeInput.value);
        localStorage.setItem("Email", emailInput.value);
        localStorage.setItem("Password", passwordInput.value);
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
    submitButton.addEventListener("click", submitSignup);
}
