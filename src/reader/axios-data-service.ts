import {Manga} from "./manga";
import {Chapter} from "./chapter";
import {Page} from "./page";
import {AxiosInstance, AxiosPromise} from "axios";

export class AxiosDataService {
  constructor(private basePath: string, private axiosClient: AxiosInstance) {

  }

  getMangaList(): AxiosPromise<Manga[]> {
    return this.axiosClient.get<Manga[]>(this.basePath + 'mangalist.json')
  }

  getChapters(mangaId: string): AxiosPromise<Chapter[]> {
    return this.axiosClient.get<Chapter[]>(this.basePath + mangaId + '.json')
  }

  getPages(chapterId: string): AxiosPromise<Page[]> {
    return this.axiosClient.get<Page[]>(this.basePath + chapterId + '.json')
  }
}
