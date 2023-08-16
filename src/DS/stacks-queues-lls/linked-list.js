class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
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
      this.tail = node
      this.length++
    }
    return true
  }

  prepend(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length = 1
    } else {
      node.next = this.head
      this.head = node
      this.length++
    }
    return true
  }

  pop() {
    // removes and returns the last element
    if (this.head) {
      let current = this.head
      let previous
      while (current.next) {
        previous = current
        current = current.next
      }
      if (previous) {
        previous.next = null
        this.tail = previous
      } else {
        this.head = null
        this.tail = null
      }
      this.length--
      current.next = null
      return current
    } else {
      return null
    }
  }

  popFirst() {
    if (this.head) {
      const temp = this.head
      if (this.head === this.tail) {
        this.tail = null
      }
      this.head = this.head.next
      this.length--
      temp.next = null
      return temp
    }
    return null
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  set(index, value) {
    let node = this.get(index)
    if (node) {
      node.value = value
      return true
    }
    return false
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) return this.popFirst()
    if (index === this.length - 1) return this.pop()
    let node = this.get(index - 1)
    let nodeToBeRemoved = node.next
    node.next = nodeToBeRemoved.next
    nodeToBeRemoved.next = null
    this.length--
    return nodeToBeRemoved
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) return this.prepend(value)
    if (index === this.length) return this.append(value)
    let temp = this.get(index - 1)
    let node = new Node(value)
    node.next = temp.next
    temp.next = node
    this.length++
    return true
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let before = null
    let after = temp.next
    for(let i = 0; i < this.length; i++) {
        after = temp.next
        temp.next = before
        before = temp
        temp = after
    }
    return this
  }

  findMiddleNode() {
    let slowPointer = this.head
    let fastPointer = this.head
    while(fastPointer?.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next   
    } 
    return slowPointer
  }

  hasLoop() {
    let slowPointer = this.head
    let fastPointer = this.head
    while(fastPointer?.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next  
        if(fastPointer === slowPointer) {
            return true
        } 
    }
    return false
  }

  findKthFromEnd(k) {
    let fastPointer = this.head
    let slowPointer = this.head
    for (let index = 0; index < k; index++) {
        if(!fastPointer) return null
        fastPointer = fastPointer.next
    }
    
    while(fastPointer) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next
    }
    return slowPointer
  }
}

const linkedList = new LinkedList(5)
console.log(linkedList)
console.log(linkedList.pop())
linkedList.print()
console.log(linkedList)
linkedList.append(8)
linkedList.append(11)
linkedList.prepend(1)
linkedList.prepend(21)
linkedList.append(99)
console.log(JSON.stringify(linkedList, null, 2))
console.log(linkedList.findMiddleNode())
linkedList.append(98)
console.log(JSON.stringify(linkedList, null, 2))
console.log(linkedList.findMiddleNode())
console.log(linkedList.hasLoop())

console.log(linkedList.findKthFromEnd(2))
console.log(linkedList.findKthFromEnd(3))
console.log(linkedList.findKthFromEnd(5))
console.log(linkedList.findKthFromEnd(6))
console.log(linkedList.findKthFromEnd(11))
linkedList.tail.next = linkedList.head
console.log(linkedList.hasLoop())
// console.log(linkedList)
// linkedList.print()
// console.log('At position -1: ', linkedList.get(-1)?.value)
// console.log('Set at position -1: ', linkedList.set(-1, 51))
// console.log('At position 0: ', linkedList.get(0)?.value)
// console.log('Set at position 0: ', linkedList.set(0, 51))
// console.log('At position 0 after set: ', linkedList.get(0)?.value)
// console.log('At position 3: ', linkedList.get(3)?.value)
// console.log('At position 5: ', linkedList.get(5)?.value)
// console.log('At position 11: ', linkedList.get(11)?.value)
// console.log(JSON.stringify(linkedList, null, 2))
// console.log(linkedList.remove(-1))
// console.log(linkedList.remove(4))
// console.log(linkedList.remove(3))
// console.log(linkedList.remove(0))
// console.log(JSON.stringify(linkedList, null, 2))
// console.log(linkedList.insert(-1, 55))
// console.log(linkedList.insert(0, 55))
// console.log(linkedList.insert(3, 97))
// console.log(linkedList.insert(4, 99))
// console.log(JSON.stringify(linkedList, null, 2))

// console.log(JSON.stringify(linkedList.reverse(), null, 2))
// console.log(linkedList.findMiddleNode())

// linkedList.pop()
// console.log(linkedList)
// linkedList.print()
// linkedList.popFirst()
// console.log(linkedList)
// linkedList.print()
// linkedList.popFirst()
// console.log(linkedList)
// linkedList.print()
// linkedList.popFirst()
// console.log(linkedList)
// linkedList.print()




// p.next = null
//    t.next = p
//    p = p.next
//    t = t.next
//       s
// 1->2->3->4->5
//             f