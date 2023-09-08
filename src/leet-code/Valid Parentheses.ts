function isValid(s: string): boolean {
  const parenthesesMap = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (parenthesesMap.has(s[i])) {
      stack.push(s[i]);
    } else {
      const lastOpen = stack.pop();

      if (!lastOpen || parenthesesMap.get(lastOpen) !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(([]))"
// Output: true

// Input: s = "({)}"
// Output: false
