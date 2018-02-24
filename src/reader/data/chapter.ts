export class Chapter {

  constructor (private _id: string, private _label: string, private _releaseDate: Date) {

  }

  get id (): string {
    return this._id
  }

  get label (): string {
    return this._label
  }

  get releaseDate (): Date {
    return this._releaseDate
  }
}
