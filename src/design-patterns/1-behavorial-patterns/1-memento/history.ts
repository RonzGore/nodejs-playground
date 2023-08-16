export default class History<T> {
  private readonly _states: T[] = []

  constructor() {}

  public push(state: T) {
    this._states.push(state)
  }

  public pop() {
    return this._states.pop()
  }
}
