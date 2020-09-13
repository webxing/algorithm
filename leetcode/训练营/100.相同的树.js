/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true
  }
  if (p == null || q == null || p.val !== q.val) {
    return false
  }

  // p 和 q 相等，递归比较 左右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
