/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root) {
//   if (root == null) {
//     return []
//   }
//   let self = root.val
//   let left = preorderTraversal(root.left)
//   let right = preorderTraversal(root.right)
//   return [self, ...left, ...right]
// }

// 递归
// var preorderTraversal = function (root, arr = []) {
//   if (root) {
//     arr.push(root.val)
//     preorderTraversal(root.left, arr)
//     preorderTraversal(root.right, arr)
//   }
//   return arr
// }

// 迭代
// var preorderTraversal = function (root) {
//   let stack = [] // 缓存 self
//   let result = [] // 结果
//   let cur = root // 当前遍历的节点
//   while (cur || stack.length > 0) {
//     while (cur) {
//       result.push(cur.val) // self
//       stack.push(cur) // 缓存 cur
//       cur = cur.left // 遍历左子树
//     }

//     cur = stack.pop().right // 遍历右子树
//   }
//   return result
// }

// 迭代 2- 统一写法
var preorderTraversal = function (root) {
  let stack = []
  let result = []
  if (root) stack.push(root)

  while (stack.length) {
    let cur = stack.pop()
    if (cur) {
      cur.right && stack.push(cur.right)
      cur.left && stack.push(cur.left)
      stack.push(cur)
      stack.push(null)
    } else {
      result.push(stack.pop().val)
    }
  }
  return result
}
// @lc code=end
