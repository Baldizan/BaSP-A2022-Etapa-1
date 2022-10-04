var url = "https://basp-m2022-api-rest-server.herokuapp.com/login"

var emailRegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function emailValidation(email) {
    return emailRegExp.test(email);
};

function hideEmailErrorMsg() {
    emailError.classList.remove("error-visible");
    emailLogin.classList.remove("inputContainerError");
}

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

function hidePwdErrorMsg() {
    pwdError.classList.remove("error-visible");
    pwdLogin.classList.remove("inputContainerError");
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
            emailError.classList.add("error-visible");
            emailLogin.classList.add("inputContainerError")
            return "Incorrect email";
        } else {
            return "";
        }
    }

    function pwdErrorMsg() {
        if (!alphanumPwd(pwdInput.value)) {
            pwdError.classList.add("error-visible");
            pwdLogin.classList.add("inputContainerError");
            return "Incorrect password";
        } else {
            return "";
        }
    };

    function submitValidation() {
        return emailValidation(emailInput.value) && alphanumPwd(pwdInput.value);
    };

    function submitLogin(event) {
        event.preventDefault()
        if (submitValidation()) {
            fetch(url + "?email=" + emailInput.value + "&password=" + pwdInput.value)
                .then(function (response) {
                    return response.json();
                }).then(function (data) {
                    alert(data.msg);
                }).catch(function (error) {
                    alert(error.msg);
                });
        } else {
            alert("Incorrect credentials");
        }
    };

    emailInput.addEventListener("blur", emailErrorMsg);
    emailInput.addEventListener("focus", hideEmailErrorMsg);
    pwdInput.addEventListener("blur", pwdErrorMsg);
    pwdInput.addEventListener("focus", hidePwdErrorMsg);
    subButton.addEventListener("click", submitLogin);
};