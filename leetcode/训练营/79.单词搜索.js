/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let ret = find(i, j, 0)
      if (ret) return true
    }
  }
  return false

  // 从[i,j]开始向上下左右寻找是否有匹配word的从start开始的后缀子串
  function find(i, j, start) {
    // 越界
    if (i >= row || i < 0) return false
    if (j >= col || j < 0) return false
    // 不符合
    let letter = board[i][j]
    if (letter !== word[start]) return false
    // 符合 - 匹配结束
    if (start === word.length - 1) return true

    // 符合-继续找
    board[i][j] = null
    let ret =
      find(i + 1, j, start + 1) ||
      find(i - 1, j, start + 1) ||
      find(i, j + 1, start + 1) ||
      find(i, j - 1, start + 1)
    board[i][j] = letter
    return ret
  }
}
// @lc code=end
