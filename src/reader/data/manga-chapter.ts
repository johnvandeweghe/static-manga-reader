import { Manga } from './manga'
import { Chapter } from './chapter'

export class MangaChapter {
  constructor (private _manga: Manga, private _chapter: Chapter) {

  }

  get manga (): Manga {
    return this._manga
  }

  get chapter (): Chapter {
    return this._chapter
  }
}
