export default class EditorState {
  private readonly _content: string

  constructor(content: string) {
    this._content = content
  }

  get content(): string {
    return this._content
  }
}
