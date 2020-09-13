/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 基数排序（Radix Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 对每一位进行排序，可以用桶排序或者计数排序
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 不是原地排序算法，空间复杂度 O(n)
 * 是稳定的排序算法
 * 时间复杂度: O(n)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function radixSort(arr) {
  let len = arr.length

  // 确认基数
  let max = 0
  for (let i = 0; i < len; i++) {
    arr[i].id = String(arr[i].id)
    if (arr[i].id.length > max) max = arr[i].id.length
  }

  // 从最低位开始排序
  while (max > 0) {
    countingSort(arr, --max)
  }

  for (let i = 0; i < len; i++) {
    arr[i].id = Number(arr[i].id)
  }

  return arr
}

// 计数排序
function countingSort(arr, radix) {
  let len = arr.length

  // 确认桶数
  let max = 9

  // 计数
  let countArr = new Array(max + 1).fill(0)
  for (let i = 0; i < len; i++) {
    let item = arr[i].id[radix]
    countArr[item]++
  }

  // 累加计数
  for (let i = 1; i <= max; i++) {
    countArr[i] += countArr[i - 1]
  }

  // 取出数据
  let ret = []
  for (let i = len - 1; i >= 0; i--) {
    let item = arr[i].id[radix]
    ret[countArr[item] - 1] = arr[i]
    countArr[item]--
  }

  // 覆盖原数组
  for (let i = 0; i < len; i++) {
    arr[i] = ret[i]
  }

  return arr
}

/**
 * Test Case
 */
{
  function test() {
    let args = []
    let i = Math.ceil(Math.random() * 10)
    while (i--) {
      // i 个元素
      args.push({
        id: parseInt(Math.random() * 10 + 89),
        age: parseInt(Math.random() * 20),
      })
    }
    console.log([...args], "===>", radixSort(args))
  }

  // 10 组测试
  let times = 10
  while (times--) {
    console.log(
      `\n\n-------------------------------- · ${times} · --------------------------------\n\n`
    )
    test()
  }
}
