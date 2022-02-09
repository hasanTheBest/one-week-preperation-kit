function timeConversion(s) {
  // Write your code here
  const arr = s.split(":");
  let hours = arr[0];
  let minutes = arr[1];
  let seconds = arr[2].slice(0, 2);

  const format = arr[2].slice(2);

  if (format === "PM") {
    if (Number(hours) === 12) {
      hours = "12";
    } else {
      hours = Number(hours) + 12;
    }
  } else {
    if (Number(hours) === 12) {
      hours = "00";
    }
  }

  return hours.toString().padStart(2, 0) + ":" + minutes + ":" + seconds;
}

console.log(timeConversion("01:02:00AM"));
