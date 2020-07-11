/**
 * 1089. 复写零   2020-06-22
 * https://leetcode-cn.com/problems/duplicate-zeros/
 * 
 * 
  给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

  注意：请不要在超过该数组长度的位置写入元素。

  要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 
  示例 1：
  输入：[1,0,2,3,0,4,5,0]
  输出：null
  解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]

  示例 2：
  输入：[1,2,3]
  输出：null
  解释：调用函数后，输入的数组将被修改为：[1,2,3]
   

  提示：
  1 <= arr.length <= 10000
  0 <= arr[i] <= 9

 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let len = arr.length
  let zeroCount = 0 // 当前项前边的0的数量

  // 确定0的数量
  for (let i = 0; i < len; i++) {
    !arr[i] && zeroCount++
  }

  // 遍历覆盖
  for (let i = len - 1; i > -1; i--) {
    if (!arr[i]) {
      // 0
      zeroCount--
      if (i + zeroCount < len) arr[i + zeroCount] = 0
      if (i + zeroCount + 1 < len) arr[i + zeroCount + 1] = 0
    } else {
      // 非0：下标+0的个数 小于arr的长度 证明当前值最后会被留下来 下标是i + zeroCount
      if (i + zeroCount < len) arr[i + zeroCount] = arr[i]
    }
  }

  return arr
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log([...args], "===>", duplicateZeros(args))
  }

  test([1, 0, 2, 3, 0, 4, 5, 0])
  test([1, 2, 3])

  test([0, 2])
  test([2, 0])
  test([0, 2, 0])

  test([1])
  test([0])
}
