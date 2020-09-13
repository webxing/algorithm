/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let min = 1
  let max = n
  while (min <= max) {
    mid = parseInt((min + max) / 2)
    let flag = guess(mid)
    if (flag === 0) {
      return mid // 猜对了
    } else if (flag < 0) {
      max = mid - 1 // 猜大了
    } else {
      min = mid + 1 // 猜小了
    }
  }
  return -1
}
// @lc code=end

// 10 -> 6
// min   max   mid
// 1     10    5
// 6     10    8
// 6     7     6
