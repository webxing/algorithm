/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 桶排序（Bucket Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 将要排序的数据分到几个有序的桶里，每个桶里的数据再单独进行排序
 * 桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 桶排序对要排序数据的要求是非常苛刻的
 *  首先，要排序的数据需要很容易就能划分成m个桶，并且桶与桶之间有着天然的大小顺序。这样每个桶内的数据都排序完之后，桶与桶之间的数据不需要再进行排序
 *  其次，数据在各个桶之间的分布是比较均匀的。如果数据经过桶的划分之后，有些桶里的数据很不平均，那桶内数据排序的时间复杂度就不是常量级了
 *  在极端情况下，如果数据都被划分到一个桶里，那就退化为 O(nlogn) 的排序算法了
 * 桶排序比较适合用在外部排序中：所谓的外部排序就是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 不是原地排序算法
 * 稳定性：取决于每个桶内部排序时所使用的的算法
 * 时间复杂度：取决于每个桶内部排序时所使用的的算法
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function bucketSort(arr) {
  let len = arr.length

  // 确认最大最小值
  for (max = arr[0], min = arr[0], i = 0; i < len; i++) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }

  // 分桶
  let bucketNumber = Math.ceil((max - min) / 100) + 1
  let bucket = new Array(bucketNumber)
  console.log(`分桶 => 最小值:${min} 最大值:${max} => 桶数：${bucket.length}`)

  // 数据入桶
  for (i = 0; i < len; i++) {
    let index = parseInt((arr[i] - min) / 100)
    console.log(`分桶 => ${arr[i]}进入桶${index + 1}`)
    if (!Array.isArray(bucket[index])) {
      bucket[index] = new Array()
    }
    bucket[index].push(arr[i])
  }

  // 桶内排序
  for (i = 0; i < bucketNumber; i++) {
    if (bucket[i] && bucket[i].length > 1) {
      console.log(`排序 => 桶${i + 1}排序`, bucket[i])
      quickSort(bucket[i])
    }
  }

  // 遍历桶 输出数据
  let ret = []
  for (i = 0; i < bucketNumber; i++) {
    while (bucket[i] && bucket[i].length) {
      ret.push(bucket[i].shift())
    }
  }
  return ret
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
    if (arr[i] < pivot) {
      let temp = arr[point]
      arr[point] = arr[i]
      arr[i] = temp
      point++
    }
  }

  let temp = arr[point]
  arr[point] = pivot
  arr[end] = temp
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
      args.push(parseInt(Math.random() * 1000))
    }
    console.log([...args], "===>", bucketSort(args))
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
