/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归
// var inorderTraversal = function (root, arr = []) {
//   if (root) {
//     inorderTraversal(root.left, arr)
//     arr.push(root.val)
//     inorderTraversal(root.right, arr)
//   }
//   return arr
// }

// 迭代- 统一方案
var inorderTraversal = function (root) {
  let stack = []
  let result = []
  if (root) stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    if (cur) {
      cur.right && stack.push(cur.right)
      stack.push(cur)
      stack.push(null)
      cur.left && stack.push(cur.left)
    } else {
      result.push(stack.pop().val)
    }
  }
  return result
}
// @lc code=end
