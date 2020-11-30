//Asignment Code 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate password
function generatePassword() {
  let availChar = [];
  let finalChar = [];
  let generatedPassword = '';


  // Prompt user for password length
  let userLength = prompt('Please choose your password length (8-128)');

  // Validate user password length 
  if (userLength < 8 || userLength > 128) {
    alert('Please make sure your password length is between (8-128)');
    return '';
  }

  // Prompt user for character selection
  let useSpec = confirm('Include special characters?');
  let useLower = confirm('Include lowercase characters?');
  let useUpper = confirm('Include uppercase characters?');
  let useNum = confirm('Include numeric characters?');

  // Validate users selection 
  if (!useSpec && !useLower && !useUpper && !useNum) {
    alert('Please choose at least one character type.');
    return '';
  }


  // Available characters 
  let specArr = ['!', '#', '$', '%', '&', '\\', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '[', '', ']', '^', '_', '`', '{', '|', '}', '~']
  let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


  // Logic to add chosen characters from Array
  if (useSpec) {
    availChar = availChar.concat(specArr);
  }

  if (useLower) {
    availChar = availChar.concat(lowerArr);
  }

  if (useUpper) {
    availChar = availChar.concat(upperArr);
  }

  if (useNum) {
    availChar = availChar.concat(numArr);
  }


  //Iterates the user length and chooses random characters from Arrays
  for (i = 0; i < userLength; i++) {
    let i = Math.floor(Math.random() * availChar.length);
    generatedPassword += availChar[i];
  }

  // Iterates through the generated password length and assigns at least one character from each array chosen


  return generatedPassword;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
