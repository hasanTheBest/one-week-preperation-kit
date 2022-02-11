function minimumBribes(q) {
  // initial queue
  const initialQueue = new Array(q.length)
    .fill(1)
    .map((item, i) => item * i + 1);
}
console.log(minimumBribes([2, 1, 5, 3, 4]));
// Output : 3 bribes takes

// q = [2, 5, 1, 3, 4] Output: Too Chaotic
