/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 快速排序（Quick Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 把最后一个元素作为分区点
 * 遍历数组，和分区点对比，比分区点小的放在左侧，大的放在右侧
 *   - 设置游标，放置起始位置（最后会处于分区点所需放置的位置）
 *   - 如果比分区点小，将元素放到游标处，游标后移
 *   - 遍历结束时，将分区点放到游标处，本轮分区结束
 * 对两侧分别重复以上操作，直到只剩一个元素，数组整体达到有序
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 空间复杂度 O(1)
 * 不是稳定的排序算法: 有交换操作
 * 时间复杂度:
 *   - 最好：O(nlogn)
 *   - 最坏：O(n * n)
 *   - 平均：O(nlogn)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function quickSort(arr) {
  quickSortComponent(arr, 0, arr.length - 1)
  return arr
}

function quickSortComponent(arr, start, end) {
  if (start >= end) return
  // 获取分区后分区点的索引
  let p = partition(arr, start, end)
  quickSortComponent(arr, start, p - 1)
  quickSortComponent(arr, p + 1, end)
}

function partition(arr, start, end) {
  let pivot = arr[end]
  let point = start // 游标
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      console.log(`交换 => ${arr[i]}-${arr[point]}`)
      let temp = arr[point]
      arr[point] = arr[i]
      arr[i] = temp
      point++
    }
  }

  console.log(`交换 => ${pivot}-${arr[point]}`)
  let temp = arr[point]
  arr[point] = pivot
  arr[end] = temp

  console.log(`本轮分区结束 => 分区点为${pivot} => 索引为${point}`, arr, "\n")
  return point
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
    console.log([...args], "===>", quickSort(args))
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
