export class Chapter {

  constructor(private _id: string, private _mangaId: string, private _label: string, private _order: number, private _releaseDate: Date) {

  }

  get id(): string {
    return this._id;
  }

  get mangaId(): string {
    return this._mangaId;
  }

  get label(): string {
    return this._label;
  }

  get order(): number {
    return this._order;
  }

  get releaseDate(): Date {
    return this._releaseDate;
  }
}
