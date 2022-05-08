
const button = document.getElementById("submit-button");

function isEmailAddress(email) {

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {

        email.focus;

        return false;
    }
}

function showError(fieldElement, errorContainerId, message) {
    const errorDiv = document.getElementById(errorContainerId);
    errorDiv.innerText = message;

    fieldElement.classList.add("error");
}

function clearError(fieldElement, errorContainerId) {
    const errorDiv = document.getElementById(errorContainerId);
    errorDiv.innerText = '';

    fieldElement.classList.remove("error");
}

function ensureNoneEmpty(fieldElement, errorContainerId, emptyErrorMessage) {
    if(fieldElement.value.length === 0){
        showError(fieldElement, errorContainerId, emptyErrorMessage);
    } else {
        clearError(fieldElement, errorContainerId);
    }
}

function validateForm(event) {

    event.preventDefault();

    const name = document.getElementById("inputName");
    const lastName = document.getElementById("inputLastname");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    const form = document.getElementById("form");

    ensureNoneEmpty(name, 'nameError', 'Name cannot be empty');
    ensureNoneEmpty(lastName, 'LastNameError', 'Last Name cannot be empty');

    if(email.value.length === 0){
        showError(email, 'emailError', 'Email cannot be empty');
    }else {
        const isEmail = isEmailAddress(email);

        if(!isEmail) {
            showError(email, 'emailError', 'Looks like this is not an email');
        } else {
            clearError(email, 'emailError');
        }
    }

    ensureNoneEmpty(password, 'passwordError', 'Password cannot be empty');
}

button.addEventListener("click", validateForm);
