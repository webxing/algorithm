/**
 * 724. 寻找数组的中心索引   2020-05-28
 * https://leetcode-cn.com/problems/find-pivot-index/
 * 
 * 
  给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

  我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

  如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

  示例 1:

  输入: 
  nums = [1, 7, 3, 6, 5, 6]
  输出: 3
  解释: 
  索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
  同时, 3 也是第一个符合要求的中心索引。


  示例 2:

  输入: 
  nums = [1, 2, 3]
  输出: -1
  解释: 
  数组中不存在满足此条件的中心索引。
  说明:

  nums 的长度范围为 [0, 10000]。
  任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 思路：
 *    leftSum + item + rightSum = sum
 *  => 2 * leftSum + item = sum
 */
var pivotIndex = function (nums) {
  let leftSum = 0
  let sum = nums.reduce((acc, cur) => acc + cur, 0)

  return nums.findIndex((item) => {
    if (2 * leftSum + item === sum) return true
    leftSum += item
  })
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", pivotIndex(args))
  }

  test([1, 7, 3, 6, 5, 6])
  test([1, 2, 3])

  test([0, 2])
  test([2, 0])
  test([1])
  test([])

  test([1, 3, 4, 2, 1, 7])
}
