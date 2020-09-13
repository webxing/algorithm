// 节点
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 链表
class LinkNode {
  constructor() {
    this.head = null
    this.length = 0
  }
  // 尾部追加
  append(data) {
    let node = new Node(data)
    if (this.head == null) {
      this.head = node
    } else {
      let cur = this.head
      while(cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.length += 1
  }

  // 追加到第 n 个节点
  appendAt(data, n) {
    let node = new Node(data)
    if (n == 0) {
      node.next = this.head
      this.head = node
    } else {
      let i = 0
      let pre = null
      let cur = this.head
      while(cur && i < n) {
        pre = cur
        cur = cur.next
        i++
      }

      pre.next = node
      node.next = cur 
    }
    this.length += 1
  }

  // 删除节点 data
  remove(data) {
    let cur = this.head
    let pre = null
    while(cur && cur.data !== data) {
      pre = cur
      cur = cur.next
    }

    if (cur) {
      pre.next = cur.next
      cur.next = null
      this.length -= 1
    }
  }

  // 删除第 n 个节点
  removeAt(n) {
    let pre = null
    let cur = this.head
    if (n == 0) {
      // 删除第一项
      this.head = cur.next
    } else {
      // 删除非第一项
      let i = 0
      while(cur && i < n) {
        pre = cur
        cur = cur.next
        i++
      }
      if (cur) {
        pre.next = cur.next
        cur.next = null
      }
    }
    this.length -= 1
  }

  // 打印链表
  print() {
    let printArr = []
    let cur = this.head
    while(cur) {
      printArr.push(cur.data)
      cur = cur.next
    }
    console.log(printArr.join('==>'))
  }
}

// 生成链表
let linkNode = new LinkNode()
// 生成节点
linkNode.append('你吃饭了吗')
linkNode.append('我吃过了')
linkNode.append('你呢')
linkNode.append('我也吃过了')
linkNode.print()
linkNode.removeAt(1)
linkNode.print()
linkNode.remove('你呢')
linkNode.print()
linkNode.appendAt('问你话呢', 10)
linkNode.print()
