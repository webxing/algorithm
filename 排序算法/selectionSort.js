/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 选择排序（Selection Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间
 * 但是选择排序每次会从未排序区间中找到最小的元素
 * 将其放到已排序区间的末尾（和未排序区间的第一个元素交换）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 是原地排序算法，空间复杂度 O(1)
 * 不是稳定的排序算法：[6,6,3] 将 3 和第一个 6 交换之后，第一个 6 跑到了第二个 6 之后
 * 时间复杂度
 *   - 最好：O(n * n)
 *   - 最坏：O(n * n)
 *   - 平均：O(n * n)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    console.log(
      `第${i + 1}轮 · 共${len}轮 · 总长度${len} · 待排序序列[${i}, ${
        len - 1
      }]\n`
    )
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
        console.log(`修改最小索引 => ${minIndex} => [值:${arr[minIndex]}]`)
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp

    console.log(`\n交换 => ${arr[i]}-${arr[minIndex]} => 交换后序列:`, [...arr])

    console.log("-----------------")
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
      args.push(parseInt(Math.random() * 200))
    }
    console.log([...args], "===>", selectionSort(args))
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
