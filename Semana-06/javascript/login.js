var emailRegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function emailValidation(email) {
    return emailRegExp.test(email);
};

function hideEmailErrorMsg() {
    emailError.style.visibility = "hidden";
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
}

window.onload = function () {
    var emailInput = document.getElementById("siEmail")
    var emailError = document.getElementById("emailError")
    var pwdInput = document.getElementById("siPassword")
    var pwdError = document.getElementById("pwdError")

    function emailErrorMsg() {
        if (!emailValidation(emailInput.value)) {
            emailError.style.visibility = "visible";
        }
    }

    function pwdErrorMsg() {
        if (!alphanumPwd(pwdInput.value)) {
            pwdError.style.visibility = "visible"
        }
    };

    emailInput.addEventListener("blur", emailErrorMsg);
    emailInput.addEventListener("focus", hideEmailErrorMsg);
    pwdInput.addEventListener("blur", pwdErrorMsg);
    pwdInput.addEventListener("focus", hidePwdErrorMsg);
};