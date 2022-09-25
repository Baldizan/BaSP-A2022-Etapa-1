var emailRegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function emailValidation(email) {
    return emailRegExp.test(email);
};

function hideEmailErrorMsg() {
    emailError.style.visibility = "hidden";
    emailLogin.style.borderColor = "#373867";
}

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

function hidePwdErrorMsg() {
    pwdError.style.visibility = "hidden";
    pwdLogin.style.borderColor = "#373867";
}

window.onload = function () {
    var emailInput = document.getElementById("siEmail")
    var emailError = document.getElementById("emailError")
    var pwdInput = document.getElementById("siPassword")
    var pwdError = document.getElementById("pwdError")
    var emailLogin = document.getElementById("emailLogin")
    var pwdLogin = document.getElementById("pwdLogin")
    var subButton = document.getElementById("submitButton")

    function emailErrorMsg() {
        if (!emailValidation(emailInput.value)) {
            emailError.style.visibility = "visible";
            emailLogin.style.borderColor = "red";
            return "Incorrect email";
        } else {
            return "";
        }
    }

    function pwdErrorMsg() {
        if (!alphanumPwd(pwdInput.value)) {
            pwdError.style.visibility = "visible"
            pwdLogin.style.borderColor = "red";
            return "Incorrect password";
        } else {
            return "";
        }
    };

    function submitValidation(event) {
        if (emailValidation(emailInput.value) && alphanumPwd(pwdInput.value)) {
            alert("email: " + emailInput.value + " password: " + pwdInput.value)
        } else {
            event.preventDefault();
            alert("Credentials are incorrect:\r\n" + emailErrorMsg() + "\r\n" + pwdErrorMsg())
        }
    }

    emailInput.addEventListener("blur", emailErrorMsg);
    emailInput.addEventListener("focus", hideEmailErrorMsg);
    pwdInput.addEventListener("blur", pwdErrorMsg);
    pwdInput.addEventListener("focus", hidePwdErrorMsg);
    subButton.addEventListener("click", submitValidation);
};