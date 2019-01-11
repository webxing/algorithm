// PI = 4 * cirleArea / squareArea
// 用蒙特卡罗算法的思想就是随机往正方形里打点，圆内的点个数之和近似于圆的面积，打点总数近似于正方形的面积
// PI = 4 * 圆内的点 / 打点总数

const _inCircle = Symbol('inCircle')
const _calcPI = Symbol('calcPI')
const _addPoint = Symbol('addPoint')

class PI {
  constructor(N = 1000000000, consoleInterval = 100000000) {
    this.N = N // 预计打点次数
    this.r = 100 // 半径
    this.cirleArea = 0 // 圆内点个数
    this.squareArea = 0 // 已打点个数
    this.consoleInterval = consoleInterval // 每打多少个点打印一次PI
  }

  // 判断是否落在圆内 包含圆边上的点
  [_inCircle](x, y) {
    return Math.pow(this.r - x, 2) + Math.pow(this.r - y, 2) <= Math.pow(this.r, 2)
  }

  // 计算目前的PI值
  [_calcPI]() {
    // SquareArea不包含4条边上的点 所以加上4条边的长度
    return 4 * this.cirleArea / (this.squareArea + 8 * this.r)
  }

  // 随机打点
  [_addPoint]() {
    // 正方形内随机打点的坐标 结果没有包含四天边上的点
    let x = Math.random() * 2 * this.r
    let y = Math.random() * 2 * this.r
  
    this.squareArea++
  
    if (this[_inCircle](x, y)) {
      this.cirleArea++
    }
  }

  // 获取并打印PI
  getPI() {
    for (let i = 1; i < this.N + 1; i++) {
      this[_addPoint]()
      if (i % this.consoleInterval === 0) {
        console.log(this.cirleArea, this.squareArea, 'PI', this[_calcPI]())
      }
    }
  }
}

// 实例化PI 获取PI值
new PI().getPI()