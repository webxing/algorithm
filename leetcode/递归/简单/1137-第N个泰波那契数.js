/**
 * 1137. 第 N 个泰波那契数   2020-07-22
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/
 * 
 * 
    泰波那契序列 Tn 定义如下： 

    T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

    给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

    示例 1：
    输入：n = 4
    输出：4
    解释：
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4


    示例 2：
    输入：n = 25
    输出：1389537
     

    提示：
    0 <= n <= 37
    答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 */


 /**
 * [0, 1, 1, 2, 4, 7, ...]
 * f(n+3) = f(n) + f(n+1) + f(n+2)
 * 某项等于前三项的和
 * @param {number} n
 * @return {number}
 */

//  递归
var tribonacci1 = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1

  return tribonacci1(n-1) + tribonacci1(n-2) + tribonacci1(n-3) 
  // 0 '===>' 0 '[耗时：0ms]'
  // 1 '===>' 1 '[耗时：0ms]'
  // 2 '===>' 1 '[耗时：0ms]'
  // 3 '===>' 2 '[耗时：0ms]'
  // 25 '===>' 1389537 '[耗时：18ms]'
  // 37 '===>' 2082876103 '[耗时：15465ms]'
};



// 执行用时：92 ms
// 内存消耗：37.6 MB
//  递归 & 缓存
let cache = {}
var tribonacci2 = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1

  if (cache[n]) return cache[n]

  let res = tribonacci2(n-1) + tribonacci2(n-2) + tribonacci2(n-3) 
  cache[n] = res
  return res

  // 0 '===>' 0 '[耗时：0ms]'
  // 1 '===>' 1 '[耗时：0ms]'
  // 2 '===>' 1 '[耗时：0ms]'
  // 3 '===>' 2 '[耗时：1ms]'
  // 25 '===>' 1389537 '[耗时：0ms]'
  // 37 '===>' 2082876103 '[耗时：0ms]'
};





// 执行用时：72 ms
// 内存消耗：37.5 MB
// 非递归
var tribonacci = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1

  let res, n1 = 0, n2 = 1, n3 = 1, i = n - 2

  while (i--) {
    res = n3 + n2 + n1

    n1 = n2
    n2 = n3
    n3 = res
  }

  return res
  // 0 '===>' 0 '[耗时：0ms]'
  // 1 '===>' 1 '[耗时：0ms]'
  // 2 '===>' 1 '[耗时：0ms]'
  // 3 '===>' 2 '[耗时：0ms]'
  // 25 '===>' 1389537 '[耗时：0ms]'
  // 37 '===>' 2082876103 '[耗时：0ms]'
}


/**
 * Test Case
 */
{
  function test(args) {
    let t1 = +new Date()
    console.log(args, "===>", tribonacci(args),`[耗时：${(new Date() - t1)}ms]`)
  }

  test(0)
  test(1)
  test(2)
  test(3)
  test(25)
  test(37)
}
