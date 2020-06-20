/**
 * 724. 寻找数组的中心索引   2020-05-28
 * https://leetcode-cn.com/problems/find-pivot-index/
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

  test([1, 7, 3, 6, 5, 6])
  test([1, 2, 3])

  test([0, 2])
  test([2, 0])
  test([1])
  test([])

  test([1, 3, 4, 2, 1, 7])
}
