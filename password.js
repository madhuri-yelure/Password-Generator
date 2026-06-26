function generatePassword() {

  const length = document.getElementById("length").value;

  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";

  if (uppercase) allChars += upperChars;
  if (lowercase) allChars += lowerChars;
  if (numbers) allChars += numberChars;
  if (symbols) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one option");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {

  const passwordField = document.getElementById("password");

  passwordField.select();
  document.execCommand("copy");

  alert("Password Copied!");
}