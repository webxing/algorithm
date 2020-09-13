/**
 * 779. 第K个语法符号   2020-07-23
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * 
 * 
    在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

    给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）


    例子:
    输入: N = 1, K = 1
    输出: 0

    输入: N = 2, K = 1
    输出: 0

    输入: N = 2, K = 2
    输出: 1

    输入: N = 4, K = 5
    输出: 1

    解释:
    第一行: 0
    第二行: 01
    第三行: 0110
    第四行: 01101001

    注意：

    N 的范围 [1, 30].
    K 的范围 [1, 2^(N-1)].
 */

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

//  递归 - 内存爆掉
var kthGrammar1 = function (N, K) {
  return run(N, "0")[K - 1]

  function run(N, res) {
    if (N === 1) return res

    let B = ""
    for (let i = 0; i < res.length; i++) {
      if (res[i] === "0") {
        B += "01"
      } else if (res[i] === "1") {
        B += "10"
      }
    }

    return run(N - 1, B)
  }
}

// 循环 - 内存爆掉
var kthGrammar2 = function (N, K) {
  if (N === 1) return "0"

  let str = "0"
  let kth = ""
  while (--N) {
    for (let s of str) {
      kth += s === "1" ? "10" : "01"
    }
    str = kth
  }
  return kth[K - 1]
}

// 父子递推
var kthGrammar = function (N, K) {
  if (N === 1) return 0
  if (K % 2) {
    // 奇数
    return kthGrammar(N - 1, parseInt((K + 1) / 2))
  } else {
    // 偶数
    return kthGrammar(N - 1, K / 2) ? 0 : 1
  }

  // 上一行的0生成下一行的01   上一行的1生成下一行的10
  // 所以：
  // K 为奇数：由上一行的 (K+1)/2 生成   且字符是一致的
  // K 为偶数：由上一行的 K/2 生成    且字符是相反的
}

/**
 * Test Case
 */
{
  function test(...args) {
    let t1 = +new Date()
    console.log(
      ...args,
      "===>",
      kthGrammar(...args),
      `[耗时：${new Date() - t1}ms]`
    )
  }

  test(1, 1)
  test(2, 1)
  test(2, 2)
  test(4, 5)
  test(25, 1024)
}
