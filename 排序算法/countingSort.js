/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 计数排序（Counting Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 计数排序其实是桶排序的一种特殊情况
 * 当要排序的 n 个数据，所处的范围并不大的时候，比如最大值是 k，我们就可以把数据划分成 k 个桶
 * 每个桶内的数据值都是相同的，省掉了桶内排序的时间
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

function countingSort(arr) {
  let len = arr.length

  // 确认桶数
  let max = 0
  for (let i = 0; i < len; i++) {
    let item = arr[i].age
    if (item > max) {
      max = item
    }
  }

  // 计数
  let countArr = new Array(max + 1).fill(0)
  for (let i = 0; i < len; i++) {
    let item = arr[i].age
    countArr[item]++
  }

  // 累加计数
  for (let i = 1; i <= max; i++) {
    countArr[i] += countArr[i - 1]
  }

  // 取出数据
  let ret = []
  for (let i = len - 1; i >= 0; i--) {
    let item = arr[i].age
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
    let i = Math.ceil(Math.random() * 6)
    while (i--) {
      // i 个元素
      args.push({
        age: parseInt(Math.random() * 10),
        value: parseInt(Math.random() * 200),
      })
    }
    console.log([...args], "===>", countingSort(args))
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
