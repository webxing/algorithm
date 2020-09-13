/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var postorderTraversal = function (root, arr = []) {
//   if (root) {
//     postorderTraversal(root.left, arr)
//     postorderTraversal(root.right, arr)
//     arr.push(root.val)
//   }
//   return arr
// }

// 迭代1- 后序是左右中  如果先写前序中左右并调整成中右左 再倒序即可
// var postorderTraversal = function (root) {
//   let stack = []
//   let result = []
//   let cur = root
//   while (cur || stack.length) {
//     while (cur) {
//       stack.push(cur)
//       result.push(cur.val)
//       cur = cur.right
//     }
//     cur = stack.pop().left
//   }
//   return result.reverse()
// }

// 迭代 2- 统一写法
var postorderTraversal = function (root) {
  let stack = []
  let result = []
  if (root) stack.push(root)

  while (stack.length) {
    let cur = stack.pop()
    if (cur) {
      stack.push(cur)
      stack.push(null)

      cur.right && stack.push(cur.right)
      cur.left && stack.push(cur.left)
    } else {
      result.push(stack.pop().val)
    }
  }
  return result
}
// @lc code=end
