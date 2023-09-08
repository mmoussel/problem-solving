/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums: number[], target: number) => {
  const valuesMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (valuesMap.has(target - nums[i])) {
      return [valuesMap.get(target - nums[i]), i];
    }

    valuesMap.set(nums[i], i);
  }
};
