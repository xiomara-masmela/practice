
const button = document.getElementById("submit-button");

function isEmailAddress(email) {

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {

        email.focus;

        return false;
    }
}

function validateForm(event) {

    event.preventDefault();

    const name = document.getElementById("inputName");

    const lastName = document.getElementById("inputLastname");

    const email = document.getElementById("inputEmail");

    const password = document.getElementById("inputPassword");

    const form = document.getElementById("form");
    
    if(name.value.length === 0){

        const errorDiv = document.getElementById("nameError");

        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Name cannot be empty";

        errorDiv.append(errorMessage);

        name.classList.add("error");
    }

    if(lastName.value.length === 0){

        const errorDiv = document.getElementById("LastNameError");

        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Last Name cannot be empty";

        errorDiv.append(errorMessage);

        lastName.classList.add("error");
    }

    if(email.value.length === 0){

        const errorDiv = document.getElementById("emailError");

        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Email cannot be empty";

        errorDiv.append(errorMessage);

        email.classList.add("error");

    }else {
        const isEmail = isEmailAddress(email);

        if(isEmail === false) {

            const errorDiv = document.getElementById("emailError");

            const errorMessage = document.createElement("p");

            errorMessage.textContent = "Looks like this is not an email";

            errorDiv.append(errorMessage);

            email.classList.add("error");

        }
    }

    if(password.value.length === 0){

        const errorDiv = document.getElementById("passwordError");

        const errorMessage = document.createElement("p");

        errorMessage.textContent = "Password cannot be empty";

        errorDiv.append(errorMessage);

        password.classList.add("error");
    }

}

button.addEventListener("click", validateForm);
