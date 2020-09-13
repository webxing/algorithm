/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 归并排序（Merge Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了
 * 归并排序使用的就是分治思想，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决，小的子问题解决了，大问题也就解决了
 * 分治是一种解决问题的处理思想，递归是一种编程技巧，分治算法一般都是用递归来实现的
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 空间复杂度 O(n)
 * 是稳定的排序算法
 * 时间复杂度: 归并排序的执行效率与要排序的原始数组的有序程度无关
 *   - 最好：O(nlogn)
 *   - 最坏：O(nlogn)
 *   - 平均：O(nlogn)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function mergeSort(arr) {
  mergeSortComponent(arr, 0, arr.length - 1)
  return arr
}

function mergeSortComponent(arr, start, end) {
  // 已全部分解为 1 个元素
  if (start >= end) return

  // 获取中间索引
  let middleIndex = parseInt((start + end) / 2)

  // 分治
  mergeSortComponent(arr, start, middleIndex)
  mergeSortComponent(arr, middleIndex + 1, end)

  // 排序
  merge(arr, start, middleIndex, end)
}

// merge([3, 18, 9], 0, 1, 2)
function merge(arr, left, middle, right) {
  let mergeArr = []

  let leftPoint = left
  let rightPoint = middle + 1

  let leftMax = middle
  let rightMax = right

  // 左右都还有值
  while (leftPoint <= leftMax && rightPoint <= rightMax) {
    if (arr[rightPoint] < arr[leftPoint]) {
      mergeArr.push(arr[rightPoint++])
      console.log(
        "比较 => ",
        arr[rightPoint - 1],
        arr[leftPoint],
        " => ",
        mergeArr
      )
    } else {
      mergeArr.push(arr[leftPoint++])
      console.log(
        "比较 => ",
        arr[rightPoint],
        arr[leftPoint - 1],
        " => ",
        mergeArr
      )
    }
  }

  // 判断哪个子数组中有剩余的数据
  let start, end
  if (leftPoint <= leftMax) {
    start = leftPoint
    end = leftMax
  } else if (rightPoint <= rightMax) {
    start = rightPoint
    end = rightMax
  }
  // 将剩余的数据拷贝到临时数组
  while (start <= end) {
    mergeArr.push(arr[start++])
  }

  for (let i = 0; i < mergeArr.length; i++) {
    arr[i + left] = mergeArr[i]
  }

  console.log(`已排序完成 => `, mergeArr)
  console.log("-----------------")
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
    console.log([...args], "===>", mergeSort(args))
  }

  // 10 组测试
  let times = 5
  while (times--) {
    console.log(
      `\n\n-------------------------------- · ${times} · --------------------------------\n\n`
    )
    test()
  }
}
