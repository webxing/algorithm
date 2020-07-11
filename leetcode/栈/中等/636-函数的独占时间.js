/**
 * 636. 函数的独占时间   2020-07-06
 * https://leetcode-cn.com/problems/exclusive-time-of-functions/
 * 
 * 
  On a single threaded CPU, we execute some functions.  Each function has a unique id between 0 and N-1.

  We store logs in timestamp order that describe when a function is entered or exited.

  Each log is a string with this format: "{function_id}:{"start" | "end"}:{timestamp}".  For example, "0:start:3" means the function with id 0 started at the beginning of timestamp 3.  "1:end:2" means the function with id 1 ended at the end of timestamp 2.

  A function's exclusive time is the number of units of time spent in this function.  Note that this does not include any recursive calls to child functions.

  The CPU is single threaded which means that only one function is being executed at a given time unit.

  Return the exclusive time of each function, sorted by their function id.

   

  Example 1:
  Input:
  n = 2
  logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
  Output: [3, 4]
  Explanation:
  Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
  Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
  Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time. 
  So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
   

  Note:
  1 <= n <= 100
  Two functions won't start or end at the same time.
  Functions will always log when they exit.
 */

 /**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 * 执行用时：96 ms
 * 内存消耗：41 MB
 */
var exclusiveTime = function(n, logs) {
  let stack = []
  let result = new Array(n).fill(0)  // 保存运行时间

  for (let log of logs) {
    // 1. 解构出每条log的信息
    let [id, type, ts] = log.split(':')
    
    if (type === 'start') {
      // 2. start：入栈
      stack.push({id, type,ts})
    } else {
      // 3. end：出栈 计算耗时
      let duration = ts - stack.pop().ts + 1
      result[id] += duration

      // 4. end出栈后 栈不为空：还有父级的函数  需要把父级函数的运行时间减掉当前运行时间
      let peekTop = stack[stack.length- 1]
      if (peekTop) {
        result[peekTop.id] -= duration
      }
    }
  }

  return result
};

/**
 * Test Case
 */
{
  function test(...args) {
    console.log(args, "===>", exclusiveTime(...args))
  }

  test(2, ["0:start:0","1:start:2","1:end:5","0:end:6"])

  test(8, ["0:start:0","1:start:5","2:start:6","3:start:9","4:start:11","5:start:12","6:start:14","7:start:15","1:start:24","1:end:29","7:end:34","6:end:37","5:end:39","4:end:40","3:end:45","0:start:49","0:end:54","5:start:55","5:end:59","4:start:63","4:end:66","2:start:69","2:end:70","2:start:74","6:start:78","0:start:79","0:end:80","6:end:85","1:start:89","1:end:93","2:end:96","2:end:100","1:end:102","2:start:105","2:end:109","0:end:114"])
}
