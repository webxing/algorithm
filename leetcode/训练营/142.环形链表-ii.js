/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 缓存
// var detectCycle = function(head) {
//   let cache = new Set()
//   while(head) {
//     if (cache.has(head)) {
//       return head
//     } else {
//       cache.add(head)
//       head = head.next
//     }
//   } 
//   return null
// };

// 快慢指针
var detectCycle = function(head) {
  let start = head
  let slow = head
  let fast = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      while(slow && start) {
        if (start === slow) {
          return slow
        }
        start = start.next
        slow = slow.next
      }
    }
  }
  return null
};
// @lc code=end

