/**
 * 498. 对角线遍历   2020-06-20
 * https://leetcode-cn.com/problems/diagonal-traverse/
 * 
 * 
  给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

  示例:

  输入:
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ]

  输出:  [1,2,4,7,5,3,6,8,9]

  说明: 给定矩阵中的元素总数不会超过 100000 。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let digits = []

  // 确定行列
  let row = matrix.length
  // Tips: 空数组 直接返回
  if (row === 0) return digits

  let col = matrix[0].length

  let i = 0
  let flag = false

  // 确定循环总次数: row + col - 1 次
  // i: [0, row + col - 2]
  while (i < row + col - 1) {
    let tRow = flag ? row : col
    let tCol = flag ? col : row

    // 0,2,4,6 --> y从大到小,x从小到大   flag=false
    // 1,3,5,7 --> x从大到小   flag=true
    let x = i < tCol ? i : tCol - 1
    let y = i - x
    // 结束：x到0  或者  y到最大
    while (x >= 0 && y < tRow) {
      digits.push(flag ? matrix[y][x] : matrix[x][y])
      x--
      y++
    }

    flag = !flag
    i++
  }

  return digits
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", findDiagonalOrder(args))
  }

  test([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])

  test([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ])

  test([[]])
}
