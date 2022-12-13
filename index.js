const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

//para realizar la validación de las Inputs de éxito y error//
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    console.log(1);
    setErrorFor(username, "Rellene este campo.");
  } else if (checkUsername(usernameValue) == false) {
    console.log(2);
    setErrorFor(username, "Caracteres inválidos.");
  } else {
    console.log(3);
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Rellene este campo.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Introduzca un correo electrónico válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "se requiere contraseña.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "se requiere al menos 8 caracteres.");
  } else {
    setSuccessFor(password);
  }
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "se requiere contraseña.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "las contraseñas no coinciden.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("La inscripción ha sido correcta!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Añadir mensaje de error//
  small.innerText = message;

  //Añadir clase de error//
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Añadir clase de éxito//
  formControl.className = "form-control success";
}

function checkUsername(username) {
  return /^[a-zA-Z]+$/.test(username);
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
