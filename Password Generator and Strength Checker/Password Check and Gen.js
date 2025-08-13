console.log("Page loaded & is running");
/* GLOBAL VARIABLES */
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

let aa123 = "Weak";
let number123 = document.getElementById("number123");
let capital123 = document.getElementById("capital123");
let symbol123 = document.getElementById("symbol123");

function hasCapitalLetter(str) {
  return /[A-Z]/.test(str);
}
/* Determines the strength of the password*/
function checkPasswordStrength(password) {
  let passwordStrength = 0;

const strengthBar = document.getElementById("strengthBar");
let barWidth = 0;
let barColor = "red";

if (aa123 === "Weak") {
    barWidth = 33;
    barColor = "red";
} else if (aa123 === "Medium") {
    barWidth = 66;
    barColor = "orange";
} else if (aa123 === "Strong") {
    barWidth = 100;
    barColor = "green";
}

strengthBar.style.width = barWidth + "%";
strengthBar.style.backgroundColor = barColor;

  if (password.length > 9) {
    passwordStrength += 4;
  } else if (password.length > 6) {
    passwordStrength += 3;
  } else if (password.length > 3) {
    passwordStrength += 1;
  }

  if (numbers.split('').some(num => password.includes(num))) {
    passwordStrength += 2;
    number123.style.display = "none";
  } else {
    number123.style.display = "list-item";
  }

  if (symbols.split('').some(sym => password.includes(sym))) {
    passwordStrength += 2;
    symbol123.style.display = "none"; 
  } else {
    symbol123.style.display = "list-item"; 
  }

  if (hasCapitalLetter(password)) {
    passwordStrength += 1;
    capital123.style.display = "none";
  } else {
    capital123.style.display = "list-item";
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
  let numbersCheck = document.getElementById('Number');
  let symbolsCheck = document.getElementById('Symbol');
  let capitalsCheck = document.getElementById('Capital');
  let password = '';
  //let characters = numbers + symbols + upperCase + lowerCase;
    let char = lowerCase;

    if (numbersCheck.checked) {
      char += numbers;
    }

    if (symbolsCheck.checked) {
      char += symbols;
    }

    if (capitalsCheck.checked) {
      char += upperCase;
    }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    password += char[randomIndex];
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
