import {Component, Inject, Vue} from 'vue-property-decorator'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'

import './updatedlist.scss'
import {AxiosDataService} from "../../reader/axios-data-service";
import {AxiosResponse} from "axios";
import {MangaChapter} from "../../reader/data/manga-chapter";
import {Chapter} from "../../reader/data/chapter";

@Component({
  template: require('./updatedlist.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class UpdatedListComponent extends Vue {

  @Inject("DataService")
  dataService: AxiosDataService

  updatedList: MangaChapter[] = []
  loading: boolean = false

  mounted() {
    this.loading = true
    this.dataService.getUpdatedList().then((response: AxiosResponse<MangaChapter[]>) => {
      this.updatedList = response.data.map((mangaChapter: any): MangaChapter => {
        let chapter = new Chapter(mangaChapter.chapter.id, mangaChapter.chapter.label, new Date(mangaChapter.chapter.releaseDate * 1000));
        return new MangaChapter(mangaChapter.manga, chapter);
      });
      this.loading = false
    })
  }

  goToManga(mangaId: string) {
    this.$router.push({
      name: "manga",
      params: {
        mangaId: mangaId
      }
    })
  }

  goToChapter(mangaId: string, chapterId: string) {
    this.$router.push({
      name: "chapter",
      params: {
        mangaId: mangaId,
        chapterId: chapterId
      }
    })
  }

}
