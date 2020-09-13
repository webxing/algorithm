/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0,
    max = x
  while (min <= max) {
    // let mid = parseInt((min + max) / 2)
    let mid = (min + max) >> 1
    let flag = mid * mid - x
    if (flag == 0) {
      return mid
    } else if (flag < 0) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return max
}
// @lc code=end

// min max mid
// 0   8   4
// 0   3   1
// 2   3   2
// 3   3   3
// 3   2

// 0   2   1
// 1   2   1
// 2   2   2
