/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let element = {
    next: head
  }

  let cur = element
  while(cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return element.next

};
// @lc code=end

