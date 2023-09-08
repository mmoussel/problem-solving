function isPalindrome(x: number) {
  return `${x}`.split("").reverse().join("") === `${x}`;
}

console.log(isPalindrome(1909));
