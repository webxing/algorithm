/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 缓存
// var hasCycle = function(head) {
//   let cache = new Set()
//   while(head) {
//     if (cache.has(head)) {
//       return true
//     } else {
//       cache.add(head)
//     }
//     head = head.next
//   }
//   return false
// };

// 快慢指针
var hasCycle = function(head) {
  let slow = head
  let fast = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
};
// @lc code=end

