/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力破解
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
// }

// hash
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num in map) {
      return [map[num], i]
    } else {
      map[target - num] = i
    }
  }
}
// @lc code=end
