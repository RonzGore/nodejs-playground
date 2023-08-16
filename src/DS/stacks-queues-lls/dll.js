class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DLL {
  constructor(value) {
    this.node = new Node(value)
    this.head = this.node
    this.tail = this.node
    this.length = 1
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }

  append(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length = 1
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
      this.length++
    }
    return true
  }

  pop() {
    if (!this.head) return null
    let nodeToBePopped = this.tail
    if (this.length === 1) {
      this.node = null
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.previous
      this.tail.next = null
      nodeToBePopped.previous = null
    }
    this.length--
    return nodeToBePopped
  }

  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
    } else {
      this.node = newNode
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode
      this.length++
    }
    return true
  }

  popFirst() {
    if (!this.head) return null
    let nodeToBePopped = this.head
    if (this.length === 1) {
      this.node = null
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.previous = null
      nodeToBePopped.next = null
    }
    this.length--
    return nodeToBePopped
  }

  get(index) {}

  set(index, value) {}

  remove(index) {}

  reverse() {
    let temp = this.tail
    this.tail = this.head
    this.head = temp

    let current = this.head
    while (current) {
      // console.log('next', current.next)
      let tmp = current.next
      // console.log('prev', current.previous)
      current.next = current.previous
      current.previous = tmp
      current = current.next
    }
    return this
  }
}

const dll = new DLL(5)
console.log(dll)
// dll.print()
dll.append(6)
dll.append(7)
dll.append(9)
dll.prepend(3)
dll.prepend(1)
console.log(dll)
dll.print()
dll.reverse()
console.log(dll)
dll.print()
console.log(dll.pop())
console.log(dll.pop())
console.log(dll.pop())
console.log(dll.pop())
console.log(dll.popFirst())
console.log(dll.popFirst())
console.log(dll.pop())
console.log(dll.popFirst())
console.log(dll)
