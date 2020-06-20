/**
 * 1299. 将每个元素替换为右侧最大元素  2020-06-20
 * https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
 * 
 * 
  给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

  完成所有替换操作后，请你返回这个数组。

  示例：
  输入：arr = [17,18,5,4,6,1]
  输出：[18,6,6,6,1,-1]
   

  提示：
  1 <= arr.length <= 10^4
  1 <= arr[i] <= 10^5

 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let len = arr.length
  if (len === 1) return [-1]

  // 存储最大值
  let max = arr[len - 1]
  // 修改最后一位
  arr[len - 1] = -1

  // 临时存储
  let temp = 0
  for (let i = len - 2; i >= 0; i--) {
    temp = arr[i]

    arr[i] = max

    // 覆盖max
    max = max > temp ? max : temp
  }

  return arr
}

var replaceElements1 = function (arr) {
  let temp = []
  let max = -1

  for (let i = arr.length; i >= 0; i--) {
    temp[i] = max
    max = max > arr[i] ? max : arr[i]
  }

  return temp
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", replaceElements(args))
  }

  test([17, 18, 5, 4, 6, 1])

  test([1, 7, 3, 6, 5, 6])
  test([1, 2, 3])

  test([0, 2])
  test([2, 0])
  test([1])

  test([1, 3, 4, 2, 1, 7])
}
