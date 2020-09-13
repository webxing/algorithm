/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let stack = []
  let cur = root
  let pre = -Infinity
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    if (cur.val <= pre) return false
    pre = cur.val

    cur = cur.right
  }
  return true
}
// @lc code=end
