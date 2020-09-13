/**
 * 1122. 数组的相对排序   2020-07-24
 * https://leetcode-cn.com/problems/relative-sort-array/
 * 
 * 
    给你两个数组，arr1 和 arr2，

    arr2 中的元素各不相同
    arr2 中的每个元素都出现在 arr1 中
    对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。


    示例：
    输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    输出：[2,2,2,1,4,3,3,9,6,7,19]

    提示：
    arr1.length, arr2.length <= 1000
    0 <= arr1[i], arr2[i] <= 1000
    arr2 中的元素 arr2[i] 各不相同
    arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

//  计数排序
var relativeSortArray1 = function (arr1, arr2) {
  let count = []
  let res = []

  for (let item of arr1) {
    if (count[item]) {
      count[item]++
    } else {
      count[item] = 1
    }
  }

  for (let item of arr2) {
    while (count[item]) {
      res.push(item)
      count[item]--
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i]) {
      res.push(i)
      count[i]--
    }
  }

  return res
}

var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    let aIndex = arr2.indexOf(a)
    let bIndex = arr2.indexOf(b)

    // 源码：a代表前边的数  b代表后边的数  如果return的值大于0    则交换位置
    // https://github.com/v8/v8/blob/4.9-lkgr/src/js/array.js#L929

    // a b 都不在 -> 升序
    // a-b>0的时候交换位置 即 a>b 时，结果会为升序
    if (aIndex === -1 && bIndex === -1) return a - b

    // a b 都在 -> 原序
    // aIndex-bIndex>0的时候交换位置 即 aIndex>bIndex 时，结果为索引升序（即原序）
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex

    // a在 b不在 -> 不动
    // 直接返回小于0的数，则不交换位置
    if (aIndex !== -1) return -1

    // b在 a不在 ->  交换
    // 直接返回大于0的数，则直接交换位置
    if (bIndex !== -1) return 1
  })
}

/**
 * Test Case
 */
{
  function test(...args) {
    console.log(...args, "===>", relativeSortArray(...args))
  }

  test([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]) // [2,2,2,1,4,3,3,9,6,7,19]
  // test([1, 7, 3, 6, 5, 6], [3, 7])
  // test([1, 2, 3], [3])
  // test([0, 2], [2])
}
