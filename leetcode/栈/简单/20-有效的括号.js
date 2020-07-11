/**
 * 20. 有效的括号   2020-06-30
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 
 * 
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。

  示例 1:
  输入: "()"
  输出: true

  示例 2:
  输入: "([)]"
  输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 * 思路：
 *     字符串非偶数 则非法
 *     遍历字符串时，匹配到左括号时是将其相应的右括号进行了压栈，遇到右括时判断和栈顶元素是否相等即可，最后判断栈是否为空
 */

var isValid = function (s) {
  // 字符串非偶数 则非法
  let len = s.length
  if (len % 2) return false

  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  let stack = []
  let top = ""

  for (let i = 0; i < len; i++) {
    let item = s[i]
    let match = map[item]
    if (match) {
      // 左半边 入栈匹配项match
      stack.push(match)
    } else {
      // 右半边 获取栈顶
      top = stack.pop()
      // 对比栈顶top 和 当前项item
      if (top !== item) {
        return false
      }
    }
  }

  return !stack.length
}

var isValid1 = function (s) {
  // 字符串非偶数 则非法
  let len = s.length
  if (len % 2) return false

  let stack = []

  // 遍历字符串
  for (let i = 0; i < len; i++) {
    let item = s[i]
    switch (item) {
      case "(":
      case "[":
      case "{": {
        stack.push(item)
        break
      }

      case ")": {
        if (stack.pop() !== "(") return false
        break
      }
      case "]": {
        if (stack.pop() !== "[") return false
        break
      }
      case "}": {
        if (stack.pop() !== "{") return false
        break
      }
    }
  }

  return !stack.length
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", isValid(args))
  }

  test("()[]{}")
  test("()")

  test("(]")
  test("([)]")

  test("")

  test("]([)]")
  test(")[]]([)]")
  test("[]]([)]")
}
