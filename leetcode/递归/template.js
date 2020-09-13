/**
 * 1137. 第 N 个泰波那契数   2020-07-22
 * https://leetcode-cn.com/tag/recursion/
 * 
 * 
  题目
 */

/**
 * Test Case
 */
{
  function test(args) {
    let t1 = +new Date()
    console.log(args, "===>", fn(args), `[耗时：${new Date() - t1}ms]`)
  }

  test(0)
  test(1)
  test(2)
  test(3)
  test(25)
  test(37)
}
