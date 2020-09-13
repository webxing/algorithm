/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []

  let map = {
    '(':')',
    '{':'}',
    '[':']'
  }

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (element in map) {
      stack.push(element)
    } else {
      if (element !== map[stack.pop()]) {
        return false
      }
    }
  }
  return !stack.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
