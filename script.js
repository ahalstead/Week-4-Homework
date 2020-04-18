// Array with options Lower, upper, numeric, special
var generateBtn = document.querySelector("#generate");
var passwordTextBox = document.querySelector("#passwordtextbox")

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharactersArray = ["?", "=", ".", "*", "[", "!", "@", "#", "$", "%", "^", "&", "]", "(", ")"];

var password = "";

var passwordOptions = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
}

//Establish function to prompt user for pass
function passwordNeeds() {
  var passwordInput = prompt('How long would you like the generated Password to be? (Must be between 8 and 128 characters).');
  while (passwordInput > 128 || passwordInput < 8) {
    passwordInput = prompt('How long would you like the generated Password to be? (Must be between 8 and 128 characters.');
  }

  var lowercase = prompt("Does your password need to include lowercase letters? (y/n)").toLowerCase();
  if (lowercase === "y") {
    passwordOptions.lowercase = true

  }

  var uppercase = prompt("Does your password need to include uppercase letters? (y/n)").toLowerCase();
  if (uppercase === "y") {
    passwordOptions.uppercase = true
  }

  var numeric = prompt("Does your password need to include numeric values? (y/n)").toLowerCase();
  if (numeric === "y") {
    passwordOptions.numeric = true
  }

  var specialCharacters = prompt("Does your password need to include special characters? (y/n)").toLowerCase();
  if (specialCharacters === "y") {
    passwordOptions.specialCharacters = true
  }

  if (lowercase === "n" && uppercase === "n" && numeric === "n" && specialCharacters === "n") {
    alert("Your password must contain at least one of the character types (lowercase, uppercase, numeric, or special characters)");
    passwordNeeds();
  }
  else {
    generatePassword(passwordInput);
    passwordTextBox.value = password;
  }

}

function generatePassword(length) {
  var finalPassword = "";
  //for (var i = 0;) i > 4; 
  for (var i = 0; i < length; i++) {
    if (passwordOptions.lowercase === true) {
      var char = getRandom(lowercaseArray);
      //This will combine var finalpassword    
      finalPassword = finalPassword + char;
    }
    if (passwordOptions.uppercase === true) {
      var char = getRandom(uppercaseArray);
      console.log("char", char)
      finalPassword = finalPassword + char;
    }
    if (passwordOptions.numeric === true) {
      var char = getRandom(numericArray);
      finalPassword = finalPassword + char;
    }
    if (passwordOptions.specialCharactersArray) {
      var char = getRandom(specialCharctersArray);
      finalPassword = finalPassword + char;
    }
    console.log(typeof finalPassword)
  }
  console.log(finalPassword);
  password = finalPassword;
  // 1. Set a password variable to an empty string
  // 2. Loop over length, e.g. 10 times
  // 3. For every option selected, need to insert that option into the password from the arrays at the top
  // 4. Show the password on the HTML page, after the loop has finished. 
  console.log(password)

}

function getRandom(arr) {
  var getRandomIndex = Math.floor(Math.random() * arr.length);
  var char = arr[getRandomIndex];
  return char;
}




// 1. Get a random index from the array. Math.floor, math.random (based on the length of the array) 
// 2. Get a char, from the array based on a random index
// 3. Return a char. On line 67 it will be assigned (for exam)



//Generate the finalpassword:

generateBtn.addEventListener("click", passwordNeeds)  
