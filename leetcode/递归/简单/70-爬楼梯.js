/**
 * 70. 爬楼梯   2020-07-22
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 
 * 
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。

    示例 1：
    输入： 2
    输出： 2
    解释： 有两种方法可以爬到楼顶。
    1.  1 阶 + 1 阶
    2.  2 阶



    示例 2：
    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶

 */

// 递归
var climbStairs1 = function (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  return climbStairs1(n - 1) + climbStairs1(n - 2)
}

// 尾递归
var climbStairs3 = function (n, n1 = 0, n2 = 1) {
  if (n === 0) return n2
  return climbStairs3(n - 1, n2, n1 + n2)
}

// 递归 & 缓存
let cache = { 1: 1, 2: 2 }
var climbStairs = function (n) {
  return cache[n]
    ? cache[n]
    : (cache[n] = climbStairs(n - 1) + climbStairs(n - 2))
}

// 非递归-循环
var climbStairs2 = function (n) {
  if (n === 1) return 1
  if (n === 2) return 2

  let res,
    n1 = 1,
    n2 = 2,
    i = n - 2

  while (i--) {
    res = n1 + n2
    n1 = n2
    n2 = res
  }
  return res
}

/**
 * Test Case
 */
{
  function test(args) {
    let t1 = +new Date()
    console.log(args, "===>", climbStairs(args), `[耗时：${new Date() - t1}ms]`)
  }

  test(1)
  test(2)
  test(3)
  test(25)
  test(100)
}
