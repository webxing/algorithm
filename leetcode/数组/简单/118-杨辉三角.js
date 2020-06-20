/**
 * 118. 杨辉三角   2020-06-20
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 
 * 
  给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

  在杨辉三角中，每个数是它左上方和右上方的数的和。

  示例:

    输入: 5
    输出:
    [
        [1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]
    ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; i++) {
    let temp = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1)
      } else {
        temp.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(temp)
  }

  return result
}

/**
 * Test Case
 */
{
  function test(args) {
    console.log(args, "===>", generate(args))
  }

  test(0)
  test(1)
  test(2)
  test(3)
  test(4)
  test(5)
}
