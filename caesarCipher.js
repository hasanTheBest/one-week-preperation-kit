function caesarCipher(s, k) {
  // Write your code here
  // 97-122 ASCII code
  const smallLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // 65 - 90 ASCII code
  const capitalLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function cypher(index, shift, variant) {
    const i = (index + shift) % 26;

    if (variant === "small") {
      return smallLetters[i];
    }
    return capitalLetters[i];
  }

  let encryptedString = "";
  for (let ch of s) {
    if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
      encryptedString += cypher(smallLetters.indexOf(ch), k, "small");
    } else if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      encryptedString += cypher(capitalLetters.indexOf(ch), k, "capital");
    } else {
      encryptedString += ch;
    }
  }

  return encryptedString;
}

console.log(caesarCipher("middle-Outz", 2));
// output: okffng-Qwvb
