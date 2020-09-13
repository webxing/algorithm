/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = head
  let pre = null
  while(cur !== null) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
    // let next = cur.next // 临时存储下一个节点
    // cur.next = pre // 翻转指针
    // pre = cur // 后移 pre
    // cur = next // 后移 cur
  }
  return pre
};
// @lc code=end

