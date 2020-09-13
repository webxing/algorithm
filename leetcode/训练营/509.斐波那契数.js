/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 递归
// var fib = function (N) {
//   if (N === 0 || N === 1) return N
//   return fib(N - 1) + fib(N - 2)
// }

// 递推
// var fib = function (N) {
//   let arr = []
//   for (let i = 0; i <= N; i++) {
//     if (i === 0 || i === 1) {
//       arr[i] = i
//     } else {
//       arr[i] = arr[i - 1] + arr[i - 2]
//     }
//   }
//   return arr[N]
// }

// 递归+缓存
let map = { 0: 0, 1: 1 }
var fib = function (N) {
  if (map[N] === undefined) {
    map[N] = fib(N - 1) + fib(N - 2)
  }

  return map[N]
}
// @lc code=end
