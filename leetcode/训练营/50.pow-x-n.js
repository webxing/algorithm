/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 二分递归
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x
  let part = myPow(x, parseInt(n / 2))
  let res = myPow(x, n % 2)
  return part * part * res
}

// 快速幂
// var myPow = function (x, n) {
//   if (n < 0) return 1 / myPow(x, -n)

//   if (n == 0 || x == 1) return 1
//   let res = 1
//   while (n) {
//     if (n & 1) {
//       res *= x
//     }
//     x *= x
//     n = parseInt(n / 2)
//   }
//   return res
// }
// @lc code=end
// 10 => 1010 => 8 4 2 1
// 2^8 + 2 ^2
