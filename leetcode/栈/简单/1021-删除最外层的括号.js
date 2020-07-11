/**
 * 1021. 删除最外层的括号   2020-07-06
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * 
 * 
  有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

  如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

  给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

  对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。
 

  示例 1：
  输入："(()())(())"
  输出："()()()"
  解释：
  输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
  删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
  示例 2：

  输入："(()())(())(()(()))"
  输出："()()()()(())"
  解释：
  输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
  删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
  示例 3：

  输入："()()"
  输出：""
  解释：
  输入字符串为 "()()"，原语化分解得到 "()" + "()"，
  删除每个部分中的最外层括号后得到 "" + "" = ""。
   

  提示：
  S.length <= 10000
  S[i] 为 "(" 或 ")"
  S 是一个有效括号字符串
 */

  /**
 * @param {string} S
 * @return {string}
 * 执行用时：72 ms
 * 内存消耗：37.9 MB
 */
var removeOuterParentheses = function(S) {
  let result = ''
  let stack = []

  for (let current of S) {
    if (current === '(') {
      // 3. 入栈前 如果栈不为空：表明不是外层括号
      if (stack.length) {
        result += '('
      }

      // 1. ( 入栈
      stack.push('(')
    } else {
      // 2. ( 出栈
      stack.pop()

      // 4. 出栈后 如果栈不为空：表明不是外层括号
      if (stack.length) {
        result += ')'
      }
    }
  }

  return result
};


 /**
 * @param {string} S
 * @return {string}
 * 执行用时：72 ms
 * 内存消耗：36.8 MB
 */
var removeOuterParentheses1 = function(S) {
  let L = 1 // 左括号的数量，初始值为1，避开外层左括号
  let R = 0 // 右括号的数量
  let current = '' // 当前字符

  let result = '' //结果

  for (let i = 1; i < S.length; i++) {
    current = S[i]
    
    if (current === '(') {
      L++      // 1. ( 则 L 标识加一
    } else {
      R++      // 2. ) 则 R 标识加一
    }

    if (R === L) {
      // 3. L 和 R 相等时：当前是外层右括号，不操作，重置标识，进入下一循环
      L = 1
      R = 0
      i++
    } else {
      // 4. 非外层：累加到结果字符串
      result += current
    }
  }

  return result
};

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", removeOuterParentheses(args))
  }

  test("()()()")
  test("(()())()")

  test("(()()()(()()))")
  test("()()(()(()))")
}
