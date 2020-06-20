/**
 * 66. 加一   2020-05-29
 * https://leetcode-cn.com/problems/plus-one/
 * 
 * 
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

  你可以假设除了整数 0 之外，这个整数不会以零开头。

  示例 1:

  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123。
  示例 2:

  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 * 思路：
 *    1. 0-8  &  9   &  99
 *    2. 内置函数
 */

var plusOne1 = function (digits) {
  digits = [...digits]

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      // 0-8
      digits[i]++
      return digits
    } else {
      // 9
      digits[i] = 0
    }
  }
  // 99
  return [1, ...digits]
}

var plusOne2 = function (digits) {
  digits = Number(digits.join("")) + 1 + ""
  return digits.split("").map(Number)
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", plusOne1(args))
    // console.log(args, "===>", plusOne2(args))
  }

  test([1, 2, 3])
  test([4, 3, 2, 1])

  test([9, 9, 9])
  test([1, 1, 9])

  test([0])
  test([9])

  test([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
}
