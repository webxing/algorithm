/**
 * 747. 至少是其他数字两倍的最大数   2020-05-28
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 *
 *
  在一个给定的数组nums中，总是存在一个最大元素 。

  查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

  如果是，则返回最大元素的索引，否则返回-1。

  示例 1:

  输入: nums = [3, 6, 1, 0]
  输出: 1
  解释: 6是最大的整数, 对于数组中的其他整数,
  6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
   

  示例 2:

  输入: nums = [1, 2, 3, 4]
  输出: -1
  解释: 4没有超过3的两倍大, 所以我们返回 -1.
   

  提示:

  nums 的长度范围在[1, 50].
  每个 nums[i] 的整数范围在 [0, 100].
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 思路：
 *    1. 判断最大数是否为第二大数的两倍
 *    2. 过滤
 */

var dominantIndex1 = function (nums) {
  let max = 0,
    sec = 0,
    index = -1

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]

    if (item > max) {
      sec = max // 把之前的最大的更新成第二大
      max = item // 更新最大值
      index = i
    } else {
      if (item > sec) {
        sec = item
      }
    }
  }
  return 2 * sec > max ? -1 : index
}

var dominantIndex1_1 = function (nums) {
  // 获取最大
  let max = Math.max(...nums)
  let index = nums.indexOf(max)

  // 制造第二大
  nums[index] = 0

  return 2 * Math.max(...nums) > max ? -1 : index
}

var dominantIndex2 = function (nums) {
  let max = Math.max(...nums)
  let filter = nums.filter((item) => item !== max && item * 2 > max)
  return filter.length ? -1 : nums.indexOf(max)
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", dominantIndex1(args))
    // console.log(args, "===>", dominantIndex1_1(args))
    // console.log(args, "===>", dominantIndex2(args))
  }

  test([3, 6, 1, 0])
  test([1, 2, 3, 4])

  test([0, 2])
  test([2, 0])
  test([1])

  test([1, 3, 4, 2, 1, 7])
}
