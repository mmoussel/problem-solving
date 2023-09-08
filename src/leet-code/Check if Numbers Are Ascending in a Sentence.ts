function areNumbersAscending(str: string): boolean {
  str = str + "a";

  let prevNumber = -1;
  let currentNumber = "";

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) > -1) {
      currentNumber = currentNumber + str[i];

      continue;
    } else if (currentNumber) {
      const parsedInt = parseInt(currentNumber);

      if (parsedInt <= prevNumber) {
        return false;
      }

      prevNumber = parsedInt;
      currentNumber = "";
    }
  }

  return true;
}
