/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pV = p.val,
    qV = q.val,
    rV = root.val

  if (pV > rV && qV > rV) {
    // 都在右子树
    return lowestCommonAncestor(root.right, p, q)
  } else if (pV < rV && qV < rV) {
    // 都在左子树
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return root
  }
}

// @lc code=end
