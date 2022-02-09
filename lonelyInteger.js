function lonelyinteger(a) {
  // Write your code here
  if (a.length === 1) return a[0];

  const firstHalf = a.splice(0, Math.ceil(a.length / 2));
  const secondHalf = a;

  for (let i = 0; i < firstHalf.length; i++) {
    if (
      // checking element doesn't exist first and second halves twice
      firstHalf.indexOf(firstHalf[i]) === firstHalf.lastIndexOf(firstHalf[i]) &&
      secondHalf.indexOf(firstHalf[i]) === -1
    ) {
      return firstHalf[i];
    } else if (
      // checking element doesn't exist second and first halves twice
      secondHalf.indexOf(secondHalf[i]) ===
        secondHalf.lastIndexOf(secondHalf[i]) &&
      firstHalf.indexOf(secondHalf[i]) === -1
    ) {
      return secondHalf[i];
    }
  }
}

console.log(lonelyinteger([3, 2, 1, 2, 3]));
// ==== Test case =========
// 1. [1]
// 2. [1, 2, 3, 4, 3, 2, 1]
// 3. [1, 1, 2]
