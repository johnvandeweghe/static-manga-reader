export class Page {
  constructor (private _imageUrl: string) {

  }

  get imageUrl (): string {
    return this._imageUrl
  }
}
