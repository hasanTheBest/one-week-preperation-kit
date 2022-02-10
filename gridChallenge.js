function gridChallenge(grid) {
  // make sure row is sorted
  const gridRowSorted = grid.map((item) => item.split("").sort().join(""));

  // create cols characters array
  const columCharArr = [];

  for (let i = 0; i < gridRowSorted[0].length; i++) {
    let chars = "";
    for (let j = 0; j < gridRowSorted.length; j++) {
      chars += gridRowSorted[j][i];
    }

    columCharArr.push(chars);
  }

  // check cols characters are sorted
  for (let m = 0; m < columCharArr.length; m++) {
    let isSorted =
      columCharArr[m] === columCharArr[m].split("").sort().join("");

    if (!isSorted) return "NO";
  }

  return "YES";
}
console.log(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]));

// output YES

// Addition tryout
function gridChallengeUsingSortWithLoop(grid) {
  // Write your code here
  const grid2d = grid.map((item, i) =>
    item.split("").map((ch) => ch.charCodeAt())
  );

  const grid2dAscending = grid2d.map((item) => {
    let letters = [];
    while (item.length > 1) {
      letters.push(Math.min(...item));

      item.splice(item.indexOf(Math.min(...item)), 1);
    }

    return letters;
  });

  return grid2dAscending;
}
