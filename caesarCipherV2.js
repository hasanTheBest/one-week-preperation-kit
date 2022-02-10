function caesarCipher(s, k) {
  // Write your code here
  let encryptedString = "";

  for (let ch of s) {
    let charCode = ch.charCodeAt();

    // 97-122 ASCII lowerCase code, k is shift/rotation
    if (charCode >= 97 && charCode <= 122) {
      // if reach end turn back to start
      let newCharCode =
        charCode + k >= 122
          ? ((charCode + k) % 122) + 96
          : (charCode + k) % 122;

      encryptedString += String.fromCharCode(newCharCode);

      // 65 - 90 ASCII upperCase code
    } else if (charCode >= 65 && charCode <= 90) {
      // if reach end turn back to start
      let newCharCode =
        charCode + k >= 90 ? ((charCode + k) % 90) + 64 : (charCode + k) % 90;

      encryptedString += String.fromCharCode(newCharCode);
    } else {
      encryptedString += ch;
    }
  }

  return encryptedString;
}

console.log(caesarCipher("middle-Outz", 2));
// output: okffng-Qwvb
