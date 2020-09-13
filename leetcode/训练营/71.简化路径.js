/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let list = path.split('/')
    let stack = []
    for (let i = 0; i < list.length; i++) {
      let element = list[i];
      if (element === '..') {
        stack.pop()
      } else if (element && element !== '.'){
        stack.push(element)
      }
    }
    return '/' + stack.join('/')
};

// 策略模式 易于拓展
// const map = {
//   '': stack => stack,
//   '.':stack => stack,
//   '..': stack => {
//     stack.pop()
//     return stack
//   },
//   '__default__': (stack, element) => {
//     stack.push(element)
//     return stack
//   }
// }
// var simplifyPath = function(path) {
//   let list = path.split('/')
//   let stack = []
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element in map) {
//       map[element](stack)
//     } else {
//       map.__default__(stack, element)
//     }
//   }
//   return '/' + stack.join('/')
// };
// @lc code=end

