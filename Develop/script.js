

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate password
function generatePassword() {


  const passLength = prompt('Please choose your password length (8-128)');
  const useSpec = confirm('Include special characters?');
  const useLower = confirm('Include lowercase characters?');
  const useUpper = confirm('Include uppercase characters?');
  const useNum = confirm('Include numeric characters?');


  function randomSpec() {
    let spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return spec[Math.floor(Math.random() * passLength.length)];
  }

  function randomLower() {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    return lower[Math.floor(Math.random() * passLength.length)];
  }

  function randomUpper() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * passLength.length)];
  }

  function randomNum() {
    let numbers = '1234567890';
    return numbers[Math.floor(Math.random() * passLength.length)];
  }

  let charChoice = '';

  if (useSpec) {
    charChoice += useSpec;
  }

  if (useLower) {
    charChoice += useLower;
  }

  if (useUpper) {
    charChoice += useUpper;
  }

  if (useNum) {
    charChoice += useNum;
  }


  let generatedPassword = '';
  console.log('here');

  for (i = 0; i <= passwordLength; i++) {
    const index = Math.floor(Math.random() * charChoice.length);
    generatedPassword += charChoice[index];

    generatePassword();

  }
  return generatedPassword;


}

// // Alert the password has been generated
// alert("Your password has been generated!")


// Add event listener to generate button
const generateBtn = addEventListener("click", writePassword);
