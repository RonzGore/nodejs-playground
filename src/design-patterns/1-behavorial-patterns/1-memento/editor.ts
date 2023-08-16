import EditorState from './editor-state'

export default class Editor {
  private _content: string = ''

  constructor() {}

  get content() {
    return this._content
  }

  set content(content: string) {
    this._content = content
  }

  public createState() {
    return new EditorState(this._content)
  }

  public restore(state: EditorState | undefined) {
    this._content = state?.content ?? ''
  }
}
