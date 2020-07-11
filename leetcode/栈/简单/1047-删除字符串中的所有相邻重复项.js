/**
 * 1047. 删除字符串中的所有相邻重复项   2020-07-06
 * https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * 
 * 
  给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

  在 S 上反复执行重复项删除操作，直到无法继续删除。

  在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

   

  示例：
  输入："abbaca"
  输出："ca"
  解释：
  例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
   

  提示：
  1 <= S.length <= 20000
  S 仅由小写英文字母组成。
 */


 /**
 * @param {string} S
 * @return {string}
 * 执行用时：88 ms
 * 内存消耗：44.8 MB
 */
var removeDuplicates = function(S) {
  let stack = []
  for (let current of S) {
    // 获取栈顶元素
    let top = stack.pop()

    // 与当前字符相等 则下一字符
    // 不相等 则把栈顶元素push回去 然后当前字符push进去
    if (current !== top) {
      stack.push(top)
      stack.push(current)
    } 
  }

  return stack.join('')
};

/**
 * @param {string} S
 * @return {string}
 * 执行用时：104 ms
 * 内存消耗：44.4 MB
 */
var removeDuplicates1 = function(S) {
  let stack = []
  for (let i = 0; i < S.length; i++) {
    // 栈顶
    let top = stack[stack.length - 1]
    // 当前字符
    let current = S[i]

    if (top) {
    // 栈非空：判断栈顶元素与当前元素的关系
      current === top ? stack.pop() : stack.push(current)
    } else {
    // 栈空：直接入栈
      stack.push(current)
    }
  }

  return stack.join('')
};


/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", removeDuplicates(args))
  }

  test("abbaca")
  test("cabbaca")

  test("abcdde")
  test("a")
}
