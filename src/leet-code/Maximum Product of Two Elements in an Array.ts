function maxProduct(nums: number[]): number {
  let max1 = -Infinity; // The largest element
  let max2 = -Infinity; // The second largest element

  nums.forEach((num) => {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  });

  return (max1 - 1) * (max2 - 1);
}

console.log(maxProduct([0, 1, 2, 34, 5]));
