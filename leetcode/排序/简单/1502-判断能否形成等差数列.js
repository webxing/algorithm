/**
 * 1502. 判断能否形成等差数列   2020-07-27
 * https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/
 * 
 * 
    给你一个数字数组 arr 。
    如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
    如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。


    示例 1：
    输入：arr = [3,5,1]
    输出：true
    解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。

    示例 2：
    输入：arr = [1,2,4]
    输出：false
    解释：无法通过重新排序得到等差数列。
     

    提示：
    2 <= arr.length <= 1000
    -10^6 <= arr[i] <= 10^6
 */


 /**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  let len = arr.length
  if ( len < 3) return true

  quickSort(arr,0, len-1)

  for(let i = 1; i < len - 1; i++) {
    if (2 * arr[i] !== arr[i-1] + arr[i+1]) return false
  }

  return true
};

function quickSort(arr,start, end) {
  if (start >= end) return

  let p = partition(arr, start, end)
  quickSort(arr, start, p - 1)
  quickSort(arr, p + 1, end)
}

function partition(arr, left, right) {
  if (right - left > 100) {
    let mid = left + parseInt((right - left)/2)
    let n1 = arr[left]
    let n2 = arr[right]
    let n3 = arr[mid]
    if (n1 > n2) {
      [n1, n2] = [n2, n1]
    }
  
    if (n1 > n3) {
      [n1, n3] = [n3, n1]
    } else {
      if (n3 > n2) {
        [n3, n2] = [n2, n3]
      }
    }
  
    [arr[right],arr[mid]] = [arr[mid], arr[right]]
  }


  let pivot = arr[right]
  let point = left
  for(let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[point],arr[i]] = [arr[i], arr[point]]
      point++
    }
  }

  [arr[point],arr[right]] = [arr[right], arr[point]]

  return point
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log([...args], "===>", canMakeArithmeticProgression(args))
  }

  test([1, 7, 3, 6, 5, 6])
  test([1, 2, 3])
  test([1, 2, 3])

  test([3,5,1])
  test([2, 0])
  test([1])
  test([1,2,4])

  test([1, 3, 4, 2, 1, 7])
  test([1, 3, 5, 9, 11, 7])
}

