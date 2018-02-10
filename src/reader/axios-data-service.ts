import {Manga} from "./data/manga";
import {Chapter} from "./data/chapter";
import {Page} from "./data/page";
import {AxiosInstance, AxiosPromise} from "axios";

export class AxiosDataService {
  constructor(private basePath: string, private axiosClient: AxiosInstance) {

  }

  getMangaList(): AxiosPromise<Manga[]> {
    return this.axiosClient.get<Manga[]>(this.basePath + 'mangalist.json')
  }

  getManga(mangaId: string): AxiosPromise<Manga> {
    return this.axiosClient.get<Manga>(this.basePath + mangaId + '.json')
  }

  getMangaChapters(mangaId: string): AxiosPromise<Chapter[]> {
    return this.axiosClient.get<Chapter[]>(this.basePath + mangaId + '_chapters.json')
  }

  getChapterPages(chapterId: string): AxiosPromise<Page[]> {
    return this.axiosClient.get<Page[]>(this.basePath + chapterId + '.json')
  }
}
