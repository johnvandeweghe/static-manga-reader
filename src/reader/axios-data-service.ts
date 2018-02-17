import {Manga} from "./data/manga";
import {Chapter} from "./data/chapter";
import {Page} from "./data/page";
import {AxiosInstance, AxiosPromise} from "axios";
import {MangaChapter} from "./data/manga-chapter";

export class AxiosDataService {
  constructor(private basePath: string, private axiosClient: AxiosInstance) {

  }

  getMangaList(): AxiosPromise<Manga[]> {
    return this.axiosClient.get<Manga[]>(this.basePath + "mangalist.json")
  }

  getUpdatedList(): AxiosPromise<MangaChapter[]> {
    return this.axiosClient.get<MangaChapter[]>(this.basePath + "updatedlist.json")
  }

  getManga(mangaId: string): AxiosPromise<Manga> {
    return this.axiosClient.get<Manga>(this.basePath + "meta/m-" + mangaId + ".json")
  }

  getMangaChapters(mangaId: string): AxiosPromise<Chapter[]> {
    return this.axiosClient.get<Chapter[]>(this.basePath + "meta/c-" + mangaId + ".json")
  }

  getChapterPages(chapterId: string): AxiosPromise<Page[]> {
    return this.axiosClient.get<Page[]>(this.basePath + "meta/p-" + chapterId + ".json")
  }
}
