// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST {
//     constructor() {
//         this.root = null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.root === null) {
//             this.root = newNode
//             return this
//         } else {
//             let current = this.root
//             while(true) {
//                 if(value > current.value) {
//                     if(current.right !== null) {
//                         current = current.right
//                     } else {
//                         current.right = newNode
//                         break
//                     }
//                 } else if(value < current.value) {
//                     if(current.left !== null) {
//                         current = current.left
//                     } else {
//                         current.left = newNode
//                         break
//                     }
//                 } else {
//                     break
//                 }
//             }

//         }
//     }
// }

// const bst = new BST()
// bst.insert(21)
// console.log(bst)
// bst.insert(28)
// console.log(bst)
// bst.insert(15)
// console.log(bst)
// bst.insert(5)
// console.log(bst)
// bst.insert(32)
// console.log(bst)
// bst.insert(21)
// console.log(JSON.stringify(bst, null, 2))

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return this
    } else {
      let current = this.root
      while (true) {
        if (value < current.value) {
          console.log(current)
          if (current.left === null) {
            current.left = node
            break
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node
            break
          } else {
            current = current.right
          }
        } else {
          break
        }
      }
    }
  }

  find(value) {
    let current = this.root
    let found = false
    while (current) {
      if (current.value === value) {
        found = true
        break
      } else if (value > current.value) {
        current = current.right
      } else if (value < current.value) {
        current = current.left
      }
    }
    return found
  }
}

const bst = new BST()
console.log('1', JSON.stringify(bst, null, 2))
bst.insert(8)
console.log('2', JSON.stringify(bst, null, 2))
bst.insert(8)
console.log('3', JSON.stringify(bst, null, 2))
bst.insert(5)
console.log('4', JSON.stringify(bst, null, 2))
bst.insert(15)
console.log('5', JSON.stringify(bst, null, 2))
bst.insert(3)
console.log('6', JSON.stringify(bst, null, 2))
bst.insert(21)
console.log('7', JSON.stringify(bst, null, 2))
bst.insert(11)
console.log('8', JSON.stringify(bst, null, 2))
bst.insert(-1)
console.log('9', JSON.stringify(bst, null, 2))
bst.insert(101)
console.log('10', JSON.stringify(bst, null, 2))
bst.insert(18)
console.log('11', JSON.stringify(bst, null, 2))
bst.insert(7)
console.log('12', JSON.stringify(bst, null, 2))

console.log(bst.find(8))
console.log(bst.find(15))
console.log(bst.find(11))
console.log(bst.find(51))
console.log(bst.find(3))
console.log(bst.find(5))
console.log(bst.find(101))
console.log(bst.find(1))
console.log(bst.find(99))
console.log(bst.find(0))
console.log(bst.find(-1))

/* 
       8
    5     15
   3 7  11   21
-1         18  101  
*/

const traverse_bfs = (bst) => {
  queue = []
  result = []
  queue.push(bst.root)
  while (queue.length > 0) {
    currentNode = queue.shift()
    result.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return result
}

const traverse_dfs_pre_order = (bst) => {
  let results = []

  function traverse(node) {
    results.push(node.value)
    if (node.left) {
      traverse(node.left, results)
    }
    if (node.right) {
      traverse(node.right, results)
    }
  }
  if (bst.root) {
    traverse(bst.root)
  }
  return results
}

const traverse_dfs_post_order = (bst) => {
  let results = []
  function traverse(node) {
    if (node.left) {
      traverse(node.left, results)
    }
    if (node.right) {
      traverse(node.right, results)
    }
    results.push(node.value)
  }
  if (bst.root) {
    traverse(bst.root)
  }
  return results
}

const traverse_dfs_in_order = (bst) => {
  let results = []
  function traverse(node) {
    if (node.left) {
      traverse(node.left, results)
    }
    results.push(node.value)
    if (node.right) {
      traverse(node.right, results)
    }
  }
  if (bst.root) {
    traverse(bst.root)
  }
  return results
}

console.log(traverse_bfs(bst))
console.log(traverse_dfs_pre_order(bst))
console.log(traverse_dfs_post_order(bst))
console.log(traverse_dfs_in_order(bst))
