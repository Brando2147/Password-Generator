//Asigning button
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate password
function generatePassword() {


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


  // Adding the user characters to an array 
  // Adding a single user character from each character array to include in the final password
  let userChars = [];
  let reqChar = [];
  if (useSpec) {
    userChars = userChars.concat(specArr);
    reqChar = reqChar.concat(specArr[Math.floor(Math.random() * specArr.length)])

  }

  if (useLower) {
    userChars = userChars.concat(lowerArr);
    reqChar = reqChar.concat(lowerArr[Math.floor(Math.random() * lowerArr.length)])

  }

  if (useUpper) {
    userChars = userChars.concat(upperArr);
    reqChar = reqChar.concat(upperArr[Math.floor(Math.random() * upperArr.length)])

  }

  if (useNum) {
    userChars = userChars.concat(numArr);
    reqChar = reqChar.concat(numArr[Math.floor(Math.random() * numArr.length)])

  }


  //Iterates the user length and chooses random characters from the User characters 
  let userPass = [];
  for (i = 0; i < userLength; i++) {
    let passIndex = Math.floor(Math.random() * userChars.length);
    let randomChar = userChars[passIndex]
    userPass.push(randomChar);
  }


  // Iterates through the final password length and places the required characters in the password
  for (let r = 0; r < reqChar.length; r++) {
    reqChar[r] = userPass[r + 3]
  }

  return userPass.join("");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);