function leftpad1(str, ch, length) {
  let len = length - str.length + 1
  return Array(len).join(ch) + str
}

// console.log(leftpad1("hello", "0", 10))
// console.time("leftpad1")
// for (let index = 0; index < 10000; index++) {
//   leftpad1("hello", "0", 10000)
// }
// console.timeEnd("leftpad1")

// 二分法
function leftpad2(str, ch, length) {
  let len = length - str.length
  let pad = ""
  while (len) {
    // 修正补全
    if (len % 2 === 1) {
      pad += ch
    }
    // 结束
    if (len === 1) {
      return pad + str
    }
    ch += ch
    len = parseInt(len / 2)
  }
}

// len pad   ch
// 5   0     00
// 2   0     0000
// 1   00000

// len pad   ch
// 13  0    00
// 6   0     0000
// 3   00000   00000000
// 1   0000000000000

// console.log(leftpad2("hello", "0", 10))
console.time("leftpad2")
for (let index = 0; index < 1000000; index++) {
  leftpad2("hello", "0", 1000000)
}
console.timeEnd("leftpad2")

// 优化二分法：位运算
// len % 2 === 1  ===>  len & 1
// 任何数n与1进行按位与其实都只是在把最后一位按位与 如果n的最后一位是1则代表他是个奇数 与的结果是1 反之是偶数
// 101 5
// 001 1
// --
// 001 1

// 100 4
// 001 1
// --
// 000 0

// parseInt(len / 2)  ===>  len >> 1
// 向左位移一位代表乘以2
// 向右位移一位代表除以2

function leftpad3(str, ch, length) {
  let len = length - str.length
  let pad = ""
  while (len) {
    // 修正补全
    if (len & 1) {
      pad += ch
    }
    // 结束
    if (len === 1) {
      return pad + str
    }
    ch += ch
    len = len >> 1
  }
}
console.log(leftpad3("hello", "0", 10))
console.time("leftpad3")
for (let index = 0; index < 1000000; index++) {
  leftpad3("hello", "0", 1000000)
}
console.timeEnd("leftpad3")
