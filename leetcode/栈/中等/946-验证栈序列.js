/**
 * 946. 验证栈序列   2020-07-06
 * https://leetcode-cn.com/problems/validate-stack-sequences/
 * 
 * 
  给定 pushed 和 popped 两个序列，每个序列中的值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

  示例 1：
  输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
  输出：true
  解释：我们可以按以下顺序执行：
  push(1), push(2), push(3), push(4), pop() -> 4,
  push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
  示例 2：

  输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
  输出：false
  解释：1 不能在 2 之前弹出。
   

  提示：
  0 <= pushed.length == popped.length <= 1000
  0 <= pushed[i], popped[i] < 1000
  pushed 是 popped 的排列。
 */


 /**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 执行用时：72 ms
 * 内存消耗：36.9 MB
, 在
 */
var validateStackSequences = function(pushed, popped) {
  // 1. 暂存模拟push的结果
  let stack = []

  // 2. 遍历pushed 模拟push行为
  for (let current of pushed) {
    // 3. push
    stack.push(current)
    // console.log(stack, popped);

    // 4. 模拟栈不为空时 取栈顶元素和popped首元素对比：如果一致 说明发生过pop行为
    while(stack.length && stack[stack.length - 1] === popped[0]) {
      // 5. 模拟pop行为
      stack.pop()
      // 6. 更新popped对比数据
      popped.shift()

      // console.log(stack, popped);
    }
  }
  console.log(stack, popped);

  // 7. 模拟栈为空则表示合法
  return !stack.length
};


/**
 * Test Case
 */
{
  function test(...args) {
    console.log(args, "===>", validateStackSequences(...args))
  }

  test([1,2,3,4,5], [4,5,3,2,1])
  test([1,2,3,4,5], [4,3,5,1,2])
}

// stack             popped
// [ 1 ]             [ 4, 5, 3, 2, 1 ]
// [ 1, 2 ]          [ 4, 5, 3, 2, 1 ]
// [ 1, 2, 3 ]       [ 4, 5, 3, 2, 1 ]
// [ 1, 2, 3, 4 ]    [ 4, 5, 3, 2, 1 ]
// [ 1, 2, 3 ]       [ 5, 3, 2, 1 ]
// [ 1, 2, 3, 5 ]    [ 5, 3, 2, 1 ]
// [ 1, 2, 3 ]       [ 3, 2, 1 ]
// [ 1, 2 ]          [ 2, 1 ]
// [ 1 ]             [ 1 ]
// []                []

// stack             popped
// [ 1 ]             [ 4, 3, 5, 1, 2 ]
// [ 1, 2 ]          [ 4, 3, 5, 1, 2 ]
// [ 1, 2, 3 ]       [ 4, 3, 5, 1, 2 ]
// [ 1, 2, 3, 4 ]    [ 4, 3, 5, 1, 2 ]
// [ 1, 2, 3 ]       [ 3, 5, 1, 2 ]
// [ 1, 2 ]          [ 5, 1, 2 ]
// [ 1, 2, 5 ]       [ 5, 1, 2 ]
// [ 1, 2 ]          [ 1, 2 ]
