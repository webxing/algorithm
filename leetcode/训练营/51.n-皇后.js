/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = []
  find(0)
  return result

  // 在每一行查找和 temp里已经确定的皇后不冲突的位置
  function find(row, temp = []) {
    if (row === n) {
      // return result.push(temp)
      return result.push(
        temp.map((v) => {
          let ret = new Array(n).fill(".")
          ret[v] = "Q"
          return ret.join("")
        })
      )
    }
    for (let col = 0; col < n; col++) {
      let canSet = temp.every((colIndex, rowIndex) => {
        return (
          // row !== rowIndex &&
          col !== colIndex &&
          col - row !== colIndex - rowIndex &&
          col + row !== colIndex + rowIndex
        )
      })
      if (!canSet) continue
      find(row + 1, [...temp, col])
    }
  }
}
// @lc code=end

// 0,0  0,1  0,2  0,3
// 1,0  1,1  1,2  1,3
// 2,0  2,1  2,2  2,3
// 3,0  3,1  3,2  3,3

// 在同一条线上的情况:
// 1. 行列的差一样
// 2. 行列的和一样
// 3. 行一样
// 4. 列一样
