let arr = []
for (let i = 0; i < 100000; i++) {
  let a = []
  for (let j = 0; j < 200; j++) {
    // a.push(j) // 升序
    // a.push(200 - j) // 降序
    a.push(parseInt(Math.random() * 10000)) // 随机
  }
  arr.push(a)
}

console.log("\n冒泡排序开始")
let bubbleSortTime = +new Date()
for (let i = 0; i < arr.length; i++) {
  bubbleSort([...arr[i]])
}
console.log(
  `冒泡排序${arr.length}组测试数据累计耗时：${new Date() - bubbleSortTime}ms`
)

console.log("\n插入排序开始")
let insertionSortTime = +new Date()
for (let i = 0; i < arr.length; i++) {
  insertionSort([...arr[i]])
}
console.log(
  `插入排序${arr.length}组测试数据累计耗时：${new Date() - insertionSortTime}ms`
)

console.log("\n选择排序开始")
let selectionSortTime = +new Date()
for (let i = 0; i < arr.length; i++) {
  selectionSort([...arr[i]])
}
console.log(
  `选择排序${arr.length}组测试数据累计耗时：${new Date() - selectionSortTime}ms`
)

console.log("\n归并排序开始")
let mergeSortTime = +new Date()
for (let i = 0; i < arr.length; i++) {
  mergeSort([...arr[i]])
}
console.log(
  `归并排序${arr.length}组测试数据累计耗时：${new Date() - mergeSortTime}ms`
)

console.log("\n快速排序开始")
let quickSortTime = +new Date()
for (let i = 0; i < arr.length; i++) {
  quickSort([...arr[i]])
}
console.log(
  `快速排序${arr.length}组测试数据累计耗时：${new Date() - quickSortTime}ms`
)

// 冒泡
function bubbleSort(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let flag = true // 当前轮是否已经达到有序状态
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = false // 有数据交换 状态为无序
      }
    }
    if (flag) break
  }

  return arr
}

// 插入
function insertionSort(arr) {
  let len = arr.length

  // 待排序序列 [i, len]
  for (let i = 1; i < len; i++) {
    let origin = arr[i]
    let j = i - 1
    // 已排序序列 [0, i - 1]
    for (; j >= 0; j--) {
      if (arr[j] > origin) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    // 插入 origin
    arr[j + 1] = origin
  }

  return arr
}

// 选择
function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 归并
function mergeSort(arr) {
  mergeSortComponent(arr, 0, arr.length - 1)
  return arr
}

function mergeSortComponent(arr, start, end) {
  // 已全部分解为 1 个元素
  if (start === end) return

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
    } else {
      mergeArr.push(arr[leftPoint++])
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
}

// 快排
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
    if (arr[i] < pivot && arr[i] !== arr[point]) {
      let temp = arr[point]
      arr[point] = arr[i]
      arr[i] = temp
      point++
    }
  }

  if (pivot !== arr[point]) {
    let temp = arr[point]
    arr[point] = pivot
    arr[end] = temp
  }

  return point
}
