// 三门问题（Monty Hall problem）亦称为蒙提霍尔问题、蒙特霍问题或蒙提霍尔悖论，
// 大致出自美国的电视游戏节目Let's Make a Deal。问题名字来自该节目的主持人蒙提·霍尔（Monty Hall）。
// 参赛者会看见三扇关闭了的门，其中一扇的后面有一辆汽车，选中后面有车的那扇门可赢得该汽车，另外两扇门后面则各藏有一只山羊
// 。当参赛者选定了一扇门，但未去开启它的时候，节目主持人开启剩下两扇门的其中一扇，露出其中一只山羊。
// 主持人其后会问参赛者要不要换另一扇仍然关上的门。问题是：换另一扇门会否增加参赛者赢得汽车的机率？
// 如果严格按照上述的条件，即主持人清楚地知道，自己打开的那扇门后是羊，那么答案是会。
// 不换门的话，赢得汽车的几率是1/3。换门的话，赢得汽车的几率是2/3。



// 思路： 三扇门分别用1、2、3表示，随机一扇门为有奖品的，随机一扇门为参赛者所选择的，如果两者相等则参赛者不换就赢了反之失败，如果不相等则参赛者换就一定会赢反之失败

const _run = Symbol('_run')
const _calcRate = Symbol('_calcRate')

class MontyHall {
  constructor(change = true, N = 10000000, consoleInterval = N / 10) {
    this.win = 0 // 获胜次数
    this.loose = 0 // 失败次数
    this.count = 0 // 已进行次数
    this.change = change // 是否改变当前选择
    this.N = N // 预计实验次数
    this.consoleInterval = consoleInterval // 每打多少个点打印一次PI
  }

  // 开启一场比赛
  [_run]() {
    let lottery =  Math.ceil(Math.random() * 3)
    let player = Math.ceil(Math.random() * 3)
    if (player === lottery) {
      this.change ? this.loose++ : this.win++
    } else {
      this.change ? this.win++ : this.loose++
    }
    this.count++
  }

  // 计算概率
  [_calcRate]() {
    return (this.win / this.count * 100).toFixed(2) + '%'
  }

  // 获取并打印rate
  getRate() {
    for (let i = 1; i < this.N + 1; i++) {
      this[_run]()
      if (i % this.consoleInterval === 0) {
        console.log(this.win, i, 'rate', this[_calcRate]())
      }
    }
  }
}

// 实例化MontyHall 获取Rate值
new MontyHall().getRate()