export class Manga {

  constructor(private _id: string, private _name: string, private _imageUrl: string, private _description: string, private _author: string, private _artist: string, private _genres: string[]) {

  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get description(): string {
    return this._description;
  }

  get author(): string {
    return this._author;
  }

  get artist(): string {
    return this._artist;
  }

  get genres(): string[] {
    return this._genres;
  }
}
