/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

//  递归
var maxDepth = function (root) {
  if (root) {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
  } else {
    return 0
  }
}

// @lc code=end
