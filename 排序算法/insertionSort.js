/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 插入排序（Insertion Sort）
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  首先，我们将数组中的数据分为两个区间，已排序区间和未排序区间
 *  初始已排序区间只有一个元素，就是数组的第一个元素
 *  取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序
 *      - 要将一个数据 a 插入到已排序区间时，需要拿 a 与已排序区间的元素依次比较大小，找到合适的插入位置
 *      - 比较的过程中，如果大小关系不符合要求则将元素顺序往后移动一位，这样才能腾出位置给元素 a 插入
 *  重复这个过程，直到未排序区间中元素为空，算法结束
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 是原地排序算法，空间复杂度 O(1)
 * 是稳定的排序算法：如果元素相同，后边的会插入到前边的后一个位置
 * 时间复杂度（注意，这里是从尾到头遍历已经有序的数据）
 *   - 最好：O(n)，有序
 *   - 最坏：O(n * n)，倒序
 *   - 平均：O(n * n)
 *     - 在数组中插入一个数据的平均时间复杂度是 O(n)
 *     - 所以，对于插入排序来说，每次插入操作都相当于在数组中插入一个数据
 *     - 循环执行 n 次插入操作，所以平均时间复杂度为 O(n*n)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Tips: 排序的过程就是一种增加有序度，减少逆序度的过程，最后达到满有序度，就说明排序完成了
 *       累计移动次数为逆序度: 逆序度 = 满有序度 - 有序度
 *
 *       插入排序包含两种操作，一种是元素的比较，一种是元素的移动
 *       移动次数是固定的，等于逆序度，无论怎么优化都不会改变
 *       比较次数是可以优化的
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Author：LiuXin
 * Email：2315496341@qq.com
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function insertionSort(arr) {
  let len = arr.length
  let _changeCount = 0

  // 待排序序列 [i, len]
  for (let i = 1; i < len; i++) {
    console.log(
      `第${i}轮 · 共${len - 1}轮 · 总长度${len} · 待排序序列[${i}, ${
        len - 1
      }]\n`
    )
    let origin = arr[i]
    let j = i - 1
    // 已排序序列 [0, i - 1]
    for (; j >= 0; j--) {
      if (arr[j] > origin) {
        arr[j + 1] = arr[j]
        console.log(`后移 => ${arr[j]} => 移动后序列:`, [...arr])
        _changeCount++
      } else {
        break
      }
    }
    // 插入 origin
    arr[j + 1] = origin

    console.log(`\n插入 => ${origin} [${i}->${j + 1}] => 插入后序列:`, [...arr])
    console.log(`\n本轮已结束，累计移动了${_changeCount}次`)
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
    console.log([...args], "===>", insertionSort(args))
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
