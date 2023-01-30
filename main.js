const rampOrNot = (number) => {
  let stringNumber = number.toString();
  let stringArr = stringNumber.split("");
  let currentHighestNumber = 0;
  let currentNumber = 0;

  for (let i = 0; i < stringArr.length; i++) {
    currentNumber = parseInt(stringArr[i]);
    if (currentHighestNumber > currentNumber) {
      console.log("false");
      return false;
    }

    if (currentNumber > currentHighestNumber) {
      currentHighestNumber = currentNumber;
    }
  }
  console.log("true");
  return true;
};

rampOrNot(345); // TRUE
rampOrNot(611); // FALSE
rampOrNot(123456789); // TRUE
rampOrNot(999999991); // FALSE