// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function () {
  var passwordLength;
  do {
    passwordLength = prompt(
      "How many characters would you like your password to be? Please choose (between 8 and 128 characters."
    );
    if (passwordLength === null) {
      return;
    }
    // Used to check if the user input is a number isNaN is a function that checks if the value is not a number. I was trying to use if (passWordLength (!includeUpperCase...) but that was not working
    if (isNaN(passwordLength)) {
      return;
    }
  } while (passwordLength < 8 || passwordLength > 128);
  var includeNumbers = confirm(
    "Would you like to include numbers in you password?"
  );
  var includeLowerCase = confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var includeUpperCase = confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var includeSpecialCharacters = confirm(
    "Would you like to include special characters in your password?"
  );

  if (
    !includeNumbers &&
    !includeLowerCase &&
    !includeUpperCase &&
    !includeSpecialCharacters
  ) {
    alert(
      "How do you expect a password without any characters? Please try again."
    );
    document.getElementById("passwordContainer").style.display = "none";
  }

  //  Repetitive section with below function DTYing out  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+~`|}{[]:;?><,./-"; Unnecessary DRYing out
  //   var password = generatePassword(passwordLength, includeNumbers, includeLowerCase, includeUpperCase, includeSpecialCharacters);
  //   console.log("password: ", password);
  var password = generatePassword(
    passwordLength,
    includeNumbers,
    includeLowerCase,
    includeUpperCase,
    includeSpecialCharacters
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});

function generatePassword(
  length,
  includeNumbers,
  includeLowerCase,
  includeUpperCase,
  includeSpecialCharacters
) {
  // var numbers = "0123456789";
  // var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  // var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var specialCharacters = "!@#$%^&*_+~`|}{[]:;?><,./-="; Moved all to the below variables to DRY out code

  // no need for this just testing console.log ("includeSpecialCharacters:", includeSpecialCharacters)
  var chars = "";
  if (includeNumbers) {
    chars += "0123456789";
  }
  if (includeLowerCase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUpperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeSpecialCharacters) {
    chars += "!@#$%^&*_+~`|}{[]:;?><,./-=";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
