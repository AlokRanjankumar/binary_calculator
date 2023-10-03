function addBinary(binary1, binary2) {
  const decimal1 = parseInt(binary1, 2);
  const decimal2 = parseInt(binary2, 2);
  const sumDecimal = decimal1 + decimal2;
  const sumBinary = sumDecimal.toString(2);
  return sumBinary;
}

// Get binary inputs from the user
const binary1 = prompt("Enter the first binary number:");
const binary2 = prompt("Enter the second binary number:");

// Call the addBinary function
const result = addBinary(binary1, binary2);

// Display the result
console.log(`The sum of ${binary1} and ${binary2} is ${result}`);
