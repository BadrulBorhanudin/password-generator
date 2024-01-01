// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a password
function generatePassword() {

  // // initialise empty string
  var password = "";

  // User will enter the length of password
  var length = Number(prompt("Enter the length of your password between 8-128 characters."));

    // User must enter a valid number between 8 to 128, otherwise it will return
    if (isNaN(length) || length < 8 || length > 128) {
      return alert("Invalid! Password length must be between 8 and 128 characters.");
    } 

  // Define character set
  var charSet = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
  };

// Function to generate a random character from a character set
function getRandomChar(charSet) {
  return charSet[Math.floor(Math.random() * charSet.length)];
}

  var charTypes = [];

    // User must answer/click Yes to include character type and Cancel to exclude character type
    var answer = confirm("Do you want to include lowercase?");
    if (answer) {
    charTypes.push("lowercase");
    }
    answer = confirm("Do you want to include uppercase?");
    if (answer) {
    charTypes.push("uppercase");
    }
    answer = confirm("Do you want to include numeric?");
    if (answer) {
    charTypes.push("numeric");
    }
    answer = confirm("Do you want to include special character?");
    if (answer) {
    charTypes.push("special");
    }

    // If the character type is invalid i.e user answers/clicks all Cancel, alert the user and return
    if (charTypes.length === 0) {
      return alert("Invalid. You must enter at least one character type.");
    }
      
  // First, add one character of each selected type to the password
  for (var i = 0; i < charTypes.length; i++) {
    password += getRandomChar(charSet[charTypes[i]]);
  }

  // Then, fill the rest of the password with random characters from the selected types
  for (var i = password.length; i < length; i++) {
    var charType = charTypes[Math.floor(Math.random() * charTypes.length)];
    password += getRandomChar(charSet[charType]);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    if (password) {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);