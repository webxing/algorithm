/**
 * 面试题 08.06. 汉诺塔问题   2020-07-23
 * https://leetcode-cn.com/problems/hanota-lcci/
 * 
 * 
    在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
    (1) 每次只能移动一个盘子;
    (2) 盘子只能从柱子顶端滑出移到下一根柱子;
    (3) 盘子只能叠在比它大的盘子上。

    请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。

    你需要原地修改栈。

    示例1:
    输入：A = [2, 1, 0], B = [], C = []
    输出：C = [2, 1, 0]

    示例2:
    输入：A = [1, 0], B = [], C = []
    输出：C = [1, 0]
    提示:

    A中盘子的数目不大于14个。
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  move(A, B, C, A.length)
  // return C

  function move(A, B, C, n) {
    if (n === 1) {
      C.push(A.pop())
      return
    }
    move(A, C, B, n - 1) // 把 n-1 块从 A 挪到 B
    C.push(A.pop()) // 把 1 块从 A 挪到 C
    move(B, A, C, n - 1) // 把 n-1 块从 B 挪到 C
  }
}

/**
 * Test Case
 */
{
  function test(...args) {
    let t1 = +new Date()
    console.log(
      ...args,
      "===>",
      hanota(...args),
      `[耗时：${new Date() - t1}ms]`
    )
  }

  test([0], [], [])
  test([1, 0], [], [])
  test([2, 1, 0], [], [])
  test([3, 2, 1, 0], [], [])
}
