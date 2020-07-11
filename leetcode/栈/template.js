/**
 * 20. 有效的括号   2020-07-06
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 
 * 
  题目
 */

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", fn(args))
  }

  test("()[]{}")
  test("()")

  test("(]")
  test("([)]")
}
