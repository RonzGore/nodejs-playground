import Editor from './editor'
import History from './history'
import EditorState from './editor-state'

const editor = new Editor()
const history = new History<EditorState>()
editor.content = 'a'
history.push(editor.createState())
console.log(editor.content)
editor.content = 'b'
history.push(editor.createState())
console.log(editor.content)
editor.content = 'c'
history.push(editor.createState())
console.log(editor.content)

editor.restore(history.pop())
console.log('1', editor.content)
editor.restore(history.pop())
console.log('2', editor.content)
editor.restore(history.pop())
console.log('3', editor.content)
editor.restore(history.pop())
console.log('4', editor.content)
editor.restore(history.pop())
console.log('5', editor.content)
