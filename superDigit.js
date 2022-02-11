function superDigit(n, k) {
  // conver string to array and added
  let digits = n.split("").reduce((prev, current) => {
    return prev + current;
  }, 0);

  // multiple the results by k
  digits = (digits * k).toString();

  // add until get single digit
  while (digits.length > 1) {
    let sum = 0;
    for (let digit of digits) {
      sum += parseInt(digit);
    }

    // Number to string
    digits = sum.toString();
  }

  // should to return int value
  return parseInt(digits);
}

console.log(superDigit("9875", 4));
// output: 2
