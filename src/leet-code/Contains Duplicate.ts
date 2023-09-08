function containsDuplicate(nums: number[]): boolean {
  const numsSet = new Set(nums);

  return numsSet.size < nums.length;
}

console.log(containsDuplicate([0, 1, 2, 0]));
