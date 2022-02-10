function superDigit(n, k) {
  // Write your code here
  // if (n.length === 1) return parseInt(n);

  let digits = n.trim().repeat(k);

  // addition
  while (digits.length > 1) {
    let sum = 0;
    for (let digit of digits) {
      sum += parseInt(digit);
    }

    digits = sum.toString();
  }

  return parseInt(digits);
}

console.log(superDigit("9875", 4));
// output: 2
