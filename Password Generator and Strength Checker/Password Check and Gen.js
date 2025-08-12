console.log("Page loaded & is running");
/* GLOBAL VARIABLES */
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

let aa123 = "Weak";

function hasCapitalLetter(str) {
  return /[A-Z]/.test(str);
}
/* Determines the strength of the password*/
function checkPasswordStrength(password) {
  let passwordStrength = 0;

  if (password.length > 9) {
    passwordStrength += 5;
  } else if (password.length > 6) {
    passwordStrength += 3;
  } else if (password.length > 3) {
    passwordStrength += 1;
  }

  if (numbers.split('').some(num => password.includes(num))) {
    passwordStrength += 2;
  }
  if (symbols.split('').some(sym => password.includes(sym))) {
    passwordStrength += 2;
  }
  if (hasCapitalLetter(password)) {
    passwordStrength += 1;
  }

  if (passwordStrength < 4) {
    aa123 = "Weak";
  } else if (passwordStrength >= 4 && passwordStrength < 7) {
    aa123 = "Medium";
  } else if (passwordStrength >= 7) {
    aa123 = "Strong";
  }

  return passwordStrength;
}
/* Generate a random 12 character password */
function generateStrongPassword(length = 12) {
  let password = '';
  let characters = numbers + symbols + upperCase + lowerCase;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthDisplay = document.getElementById("strengthDisplay");
  const generatePass = document.getElementById("generateStrongPassword");

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    checkPasswordStrength(password);
    strengthDisplay.textContent = aa123;

    strengthDisplay.classList.remove("strength-weak", "strength-medium", "strength-strong");
    if (aa123 === "Weak") {
      strengthDisplay.classList.add("strength-weak");
    } else if (aa123 === "Medium") {
      strengthDisplay.classList.add("strength-medium");
    } else if (aa123 === "Strong") {
      strengthDisplay.classList.add("strength-strong");
    }
  });

  generatePass.addEventListener("click", () => {
    const generatedPass = generateStrongPassword(12);
    passwordInput.value = generatedPass;


    checkPasswordStrength(generatedPass);
    strengthDisplay.textContent = aa123;

    strengthDisplay.classList.remove("strength-weak", "strength-medium", "strength-strong");
    if (aa123 === "Weak") {
      strengthDisplay.classList.add("strength-weak");
    } else if (aa123 === "Medium") {
      strengthDisplay.classList.add("strength-medium");
    } else if (aa123 === "Strong") {
      strengthDisplay.classList.add("strength-strong");
    }
  });
});
