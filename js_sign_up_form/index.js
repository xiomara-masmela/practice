class SignUpForm {
  constructor() {
    this.name = document.getElementById("inputName");
    this.lastName = document.getElementById("inputLastname");
    this.email = document.getElementById("inputEmail");
    this.password = document.getElementById("inputPassword");
    this.submitButton = document.getElementById("submit-button");

    this.validateForm = this.validateForm.bind(this);
    this.showError = this.showError.bind(this);
    this.clearError = this.clearError.bind(this);
    this.ensureNoneEmpty = this.ensureNoneEmpty.bind(this);
    this.isEmailAddress = this.isEmailAddress.bind(this);
    this.submitButton.addEventListener("click", this.validateForm);
  }

  isEmailAddress(email) {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
      email.focus;
      return false;
    }
    return true;
  }

  showError(fieldElement, errorContainerId, message) {
    const errorDiv = document.getElementById(errorContainerId);
    errorDiv.innerText = message;

    fieldElement.classList.add("error");
  }

  clearError(fieldElement, errorContainerId) {
    const errorDiv = document.getElementById(errorContainerId);
    errorDiv.innerText = "";

    fieldElement.classList.remove("error");
  }

  ensureNoneEmpty(fieldElement, errorContainerId, emptyErrorMessage) {
    if (fieldElement.value.length === 0) {
      this.showError(fieldElement, errorContainerId, emptyErrorMessage);
    } else {
      this.clearError(fieldElement, errorContainerId);
    }
  }

  validateForm(event) {
    event.preventDefault();

    this.ensureNoneEmpty(this.name, "nameError", "Name cannot be empty");
    this.ensureNoneEmpty(
      this.lastName,
      "LastNameError",
      "Last Name cannot be empty"
    );

    if (this.email.value.length === 0) {
      this.showError(this.email, "emailError", "Email cannot be empty");
    } else {
      const isEmail = this.isEmailAddress(this.email);
      if (!isEmail) {
        this.showError(this.email, "emailError", "Looks like this is not an email");
      } else {
        this.clearError(this.email, "emailError");
      }
    }

    this.ensureNoneEmpty(this.password, "passwordError", "Password cannot be empty");
  }
}

const signUpForm = new SignUpForm();
