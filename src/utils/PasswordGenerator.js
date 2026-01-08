export const GeneratePassword = ({
  length = 6,
  isNumbersIncluded = false,
  isSpecialCharsIncluded = false,
}) => {
//   console.log(
//     "from function definition",
//     length,
//     isNumbersIncluded,
//     isSpecialCharsIncluded
//   );

  let resultPassword = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (isNumbersIncluded) chars += "1234567890";
  if (isSpecialCharsIncluded) chars += "!@#$%^&*(){}[]";

  for (let i = 0; i < length; i++) {
    // Generate a random index between 0 to chars length & convert rounded number using Math.Floor method
    // find using chatAt method
    const index = Math.floor(Math.random() * chars.length);
    // console.log(index);
    resultPassword += chars.charAt(index);
  }

  return resultPassword;
};

// Just for experiment
// const length = 6;
// const isNumbersIncluded = false;
// const isSpecialCharsIncluded = false;

// let resultPassword = "";

// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// if (isNumbersIncluded) chars += "1234567890";
// if (isSpecialCharsIncluded) chars += "!@#$%^&*(){}[]";

// for (let i = 0; i < length; i++) {
//   // Generate a random index between 0 to chars length. & find using chatAt method
//   const index = Math.floor(Math.random() * chars.length);
//   console.log(index);

//   resultPassword += chars.charAt(index);
// }

// console.log(resultPassword);
